const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../dbconnect/dbconnect'); 
const { authenticateToken } =  require('./authRoutes')
// Create an Express Router
const router = express.Router();

// Super Admin Route to Get All Employees
router.get('/api/super-admin/employees', authenticateToken, (req, res) => {
    // Ensure the requesting user has the Super Admin role
    if (req.user.role_id !== 1) {
        return res.status(403).json({ message: 'Access Denied' });
    }

    // Fetch users with their role names and department names
    const query = `
        SELECT 
            Users.user_id, 
            Users.username, 
            Users.email, 
            Roles.role_name, 
            Departments.department_name
        FROM Users
        LEFT JOIN Roles ON Users.role_id = Roles.role_id
        LEFT JOIN Departments ON Users.department_id = Departments.department_id
    `;

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching employees" });
        }
        res.json(results);
    });
});


//---------------projects FOR HIGHER AUTHORITY----------
router.get('/all-deparment-projects', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id; // Get user_id from the token
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized: User ID missing' });
        }

        // Check if the logged-in user has higher authority permissions
        const [authorityRole] = await db.promise().query(
            `
            SELECT r.role_name 
            FROM Users u
            JOIN Roles r ON u.role_id = r.role_id
            WHERE u.user_id = ?
            `,
            [userId]
        );

        if (authorityRole.length === 0 || !['Super Admin', 'Admin', 'Operation Head'].includes(authorityRole[0].role_name)) {
            return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
        }

        // Fetch all project details with assigned user details and department
        const [projects] = await db.promise().query(
            `
            SELECT 
                p.project_id,
                p.project_name,
                p.project_description,
                p.project_status,
                p.deadline_date,
                p.assigned_date,
                pa.assignment_id,
                pa.deadline_assigned,
                p.project_status,
                pa.project_assigned_date,
                pa.assigned_time_given,
                u.user_id AS employee_id,
                u.username AS assigned_to,
                d.department_name AS user_department,
                c.client_name AS client_name,
                c.email AS client_email
            FROM Projects p
            JOIN Projects_Assigned pa ON p.project_id = pa.project_id
            JOIN Users u ON pa.employee_id = u.user_id
            JOIN Departments d ON u.department_id = d.department_id
            JOIN Clients c ON p.client_id = c.client_id
            ORDER BY d.department_name, p.project_name
            `
        );

        if (projects.length === 0) {
            return res.status(404).json({ message: 'No projects found' });
        }

        // Respond with all project and assignment data
        res.status(200).json({
            total_projects: projects.length,
            projects,
        });
    } catch (error) {
        console.error('Error fetching all projects:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;