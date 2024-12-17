
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../dbconnect/dbconnect');
const { authenticateToken } =  require('./authRoutes')

// Create an Express Router
const router = express.Router();

// Project Route for Admin and Operation Head
router.get('/api/projects', authenticateToken, (req, res) => {
    const allowedRoles = [1, 2, 3]; // Allowed roles: Super Admin, Admin, Operation Head
    if (!allowedRoles.includes(req.user.role_id)) {
        return res.status(403).json({ message: 'Access denied. You do not have permission to view projects.' });
    }

    db.query('SELECT * FROM Projects', (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        res.json(results); // Return list of projects
    });
});


//-----------------TEAM LEADER------------
  //daily standups
  //GET ALL THE STANDUP ENTRIES BEFORE APPROVE
  router.get('/api/all-standups', (req, res) => {
    const query = `
        SELECT
            s.standup_id,
            s.user_id,
            u.username,
            d.department_name,
            s.project_id,
            p.project_name,
            s.status,
            s.hours,
            s.minutes,
            s.billing_status,
            s.notes,
            s.standup_date,
            s.approval_status
        FROM
            Standups s
        JOIN
            Users u ON s.user_id = u.user_id
        LEFT JOIN
            Departments d ON u.department_id = d.department_id
        JOIN
            Projects p ON s.project_id = p.project_id
        WHERE
            s.approval_status = 'Pending' -- Only fetch standups with Pending approval status
        ORDER BY s.standup_date DESC;
    `;

    // Execute the query
    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error retrieving standup data:', err);
            return res.status(500).json({
                message: 'Failed to retrieve standup data.',
                error: err.message
            });
        }

        // If data is found, send a success response with the data
        res.status(200).json({
            message: 'Standup data retrieved successfully.',
            data: rows
        });
    });
});


router.post('/api/standups/action-review', (req, res) => {
    
    const { standup_id, status } = req.body; // status will be either 'Approved' or 'Declined'

    // Validate status input (Allow 'Approved' or 'Declined')
    if (!['Approved', 'Declined'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Status must be "Approved" or "Declined".' });
    }

    const checkStandupQuery = `
        SELECT standup_id 
        FROM Standups
        WHERE standup_id = ?
    `;

    db.query(checkStandupQuery, [standup_id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error checking standup existence.' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Standup not found.' });
        }

        // Update the standup's approval status
        const updateStandupQuery = `
            UPDATE Standups
            SET approval_status = ?, reviewed_date = NOW()
            WHERE standup_id = ?
        `;

        db.query(updateStandupQuery, [status, standup_id], (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating standup status.' });
            }
            // Respond with the updated message depending on approval or rejection
            res.json({ message: `Standup has been ${status === 'Approved' ? 'approved' : 'declined'}.` });
        });
    });
});


//--------LEAVES APPROVE REJECT BY THE TL section---------  OR CAN BE HR
// Fetch pending leave requests for users in the same department for the tl OR CAN BE HR
router.get('/api/leave/pending-requests', authenticateToken, (req, res) => {
    const higherAuthorityId = req.user.id; // Logged-in higher authority ID

    // Fetch higher authority's department ID
    const getDepartmentQuery = `
        SELECT department_id FROM Users WHERE user_id = ?
    `;

    db.query(getDepartmentQuery, [higherAuthorityId], (err, result) => {
        if (err || result.length === 0) {
            return res.status(500).json({ message: 'Error fetching department' });
        }

        const departmentId = result[0].department_id;

        const pendingLeavesQuery = `
            SELECT Leaves.leave_id, Leaves.start_date, Leaves.end_date, Leaves.leave_type, 
                   Leaves.leave_reason, Leaves.status, Users.username as employee_name
            FROM Leaves
            JOIN Users ON Leaves.user_id = Users.user_id
            WHERE Users.department_id = ? AND Leaves.status = 'Pending'
        `;

        db.query(pendingLeavesQuery, [departmentId], (err, leaves) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching leave requests' });
            }
            res.json({ pendingLeaves: leaves });
        });
    });
});

//APPROVE OR REJECT A LEAVE REQUEST
// Approve or reject a leave request
router.post('/api/leave/review', authenticateToken, (req, res) => {
    const higherAuthorityId = req.user.id;  // Get the logged-in higher authority's user_id
    const { leave_id, status } = req.body;  // status will be either 'Approved' or 'Rejected'

    // Validate status input
    if (!['Approved', 'Rejected'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Status must be "Approved" or "Rejected".' });
    }

    // Step 1: Get the department_id of the higher authority
    const getDepartmentQuery = `
        SELECT department_id 
        FROM Users 
        WHERE user_id = ?
    `;

    db.query(getDepartmentQuery, [higherAuthorityId], (err, result) => {
        if (err || result.length === 0) {
            return res.status(500).json({ message: 'Error fetching department information.' });
        }

        const departmentId = result[0].department_id;

        // Step 2: Check if the leave request belongs to a user in the same department
        const checkLeaveDepartmentQuery = `
            SELECT Leaves.leave_id, Users.department_id 
            FROM Leaves
            JOIN Users ON Leaves.user_id = Users.user_id
            WHERE Leaves.leave_id = ? AND Users.department_id = ?
        `;

        db.query(checkLeaveDepartmentQuery, [leave_id, departmentId], (err, leaves) => {
            if (err || leaves.length === 0) {
                return res.status(403).json({ message: 'Unauthorized to review this leave request.' });
            }

            // Step 3: Update the leave request status, reviewed_by, and reviewed_date
            const updateLeaveQuery = `
                UPDATE Leaves
                SET status = ?, reviewed_by = ?, reviewed_date = NOW()
                WHERE leave_id = ?
            `;

            db.query(updateLeaveQuery, [status, higherAuthorityId, leave_id], (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error updating leave status.' });
                }
                res.json({ message: `Leave request has been ${status.toLowerCase()}.` });
            });
        });
    });
});


//------------projects FOR A PARTICULAR TL---------------------------------
router.get('/department/department-projects', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id; // Get user_id from the token
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized: User ID missing' });
        }

        // Step 1: Get the department of the higher authority
        const [authorityDepartment] = await db.promise().query(
            `
            SELECT d.department_name 
            FROM Users u
            JOIN Departments d ON u.department_id = d.department_id
            WHERE u.user_id = ?
            `,
            [userId]
        );

        if (authorityDepartment.length === 0) {
            return res.status(404).json({ error: 'Department not found for this user' });
        }

        const departmentName = authorityDepartment[0].department_name;

        // Step 2: Fetch projects assigned to users in the same department
        const [projects] = await db.promise().query(
            `
            SELECT 
                pa.assignment_id,
                p.project_name,
                p.project_description,
                p.project_status,
                pa.deadline_assigned,
                p.project_status,
                pa.project_assigned_date,
                pa.assigned_time_given,
                u.username AS assigned_to,
                d.department_name AS user_department
            FROM Projects_Assigned pa
            JOIN Projects p ON pa.project_id = p.project_id
            JOIN Users u ON pa.employee_id = u.user_id
            JOIN Departments d ON u.department_id = d.department_id
            WHERE d.department_name = ?
            `,
            [departmentName]
        );

        if (projects.length === 0) {
            return res.status(404).json({ message: 'No projects found for this department' });
        }

        // Step 3: Respond with the filtered project data
        res.status(200).json({
            department: departmentName,
            projects,
        });
    } catch (error) {
        console.error('Error fetching projects by department:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;