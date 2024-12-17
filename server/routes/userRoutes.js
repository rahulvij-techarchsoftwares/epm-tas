
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../dbconnect/dbconnect');
const { authenticateToken } =  require('./authRoutes')

// Create an Express Router
const router = express.Router();

// Get Logged-in User’s Details  (gives name)
router.get('/api/standup-users', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const query = `SELECT username FROM Users WHERE user_id = ?`;
    db.query(query, [userId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result[0]); // Send back the username
    });
});

// Get Project List for Standup Form
router.get('/api/standup-projects', (req, res) => {
    db.query('SELECT project_id, project_name FROM Projects', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add Standup Record
// Standup submission endpoint with token-based authentication
router.post('/api/standups', authenticateToken, (req, res) => {
    const { project_id, status, hours, minutes, billing_status, notes, standup_date } = req.body;
    const user_id = req.user.id;  // Extract the user_id from the authenticated user
  
    // Validate that the standup_date is provided
    if (!standup_date) {
      return res.status(400).json({ error: 'Standup date is required.' });
    }
  
    const query = `
      INSERT INTO Standups (
        user_id, project_id, status, hours, minutes, billing_status, notes, standup_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      user_id, 
      project_id, 
      status, 
      hours || 0, 
      minutes || 0, 
      billing_status, 
      notes || '', 
      standup_date  // Include the user-provided date
    ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error occurred.' });
      }
      res.status(201).json({ message: 'Standup entry saved successfully.', standupId: result.insertId });
    });
  });
  //review status
 //GET ALL THE STANDUP ENTRIES AFTER EVERYTHING DONE DEPARTMENT WISE
// API to fetch standup details based on user’s department
// Get all Standups filtered by the user's department
router.get('/api/standups/department', authenticateToken, (req, res) => {
    const user_id = req.user.id; // Access the user_id from the token

    if (!user_id) {
        return res.status(400).json({ message: 'User ID not found in token' });
    }

    // Fetch user department based on user_id
    db.query('SELECT department_id FROM Users WHERE user_id = ?', [user_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching user department' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const department_id = results[0].department_id;

        // Fetch all standups for users in the same department
        db.query(
            `SELECT s.*, u.username, u.email, p.project_name
            FROM Standups s
            JOIN Users u ON s.user_id = u.user_id
            JOIN Projects p ON s.project_id = p.project_id
            WHERE u.department_id = ?`, [department_id],
            (err, standups) => {
                if (err) {
                    return res.status(500).json({ error: 'Error fetching standups' });
                }

                if (standups.length === 0) {
                    return res.status(404).json({ message: 'No standups found for this department' });
                }

                return res.json(standups); // Return the standups for the department
            }
        );
    });
});


router.get('/api/user-latest-standups', authenticateToken, (req, res) => {
    const user_id = req.user.id; // Extract user_id from the JWT token
  
    const query = `
      SELECT 
        s.standup_id,
        s.user_id,
        s.project_id,
        s.status,
        s.hours,
        s.minutes,
        s.billing_status,
        s.notes,
        s.standup_date,
        s.approval_status,
        s.reviewed_by,
        s.reviewed_date,
        p.project_name,
        c.client_name
      FROM Standups s
      JOIN Projects p ON s.project_id = p.project_id
      JOIN Clients c ON p.client_id = c.client_id
      WHERE s.user_id = ?
      ORDER BY s.standup_date DESC, s.standup_id DESC
      LIMIT 3
    `;
  
    db.query(query, [user_id], (err, results) => {
      if (err) {
        console.error("Error fetching standups:", err);
        return res.status(500).json({ message: "Error retrieving standups" });
      }
  
      res.json(results);
    });
  });
  
  

// Route to get all standup details for the logged-in user
router.get('/api/user-all-standups', authenticateToken, (req, res) => {
    const user_id = req.user.id; // Extract user_id from the JWT token

    const query = `
        SELECT * FROM Standups
        WHERE user_id = ?
    `;

    db.query(query, [user_id], (err, results) => {
        if (err) {
            console.error("Error fetching standups:", err);
            return res.status(500).json({ message: "Error retrieving standups" });
        }

        res.json(results);
    });
});

//LEAVES SECTION
// API to apply for leave for user
router.post('/api/leave/apply', authenticateToken, (req, res) => {
    // Get the authenticated user's ID from the token
    const user_id = req.user.id;  // Assumes authenticateToken sets req.user.id

    // Destructure the leave details from the request body
    const { start_date, end_date, leave_type, leave_reason } = req.body;

    // Validate input (basic example)
    if (!start_date || !end_date || !leave_type || !leave_reason) {
        return res.status(400).json({ message: 'Please provide all leave details' });
    }

    // SQL query to insert a new leave request
    const query = `
        INSERT INTO Leaves (user_id, start_date, end_date, leave_type, leave_reason)
        VALUES (?, ?, ?, ?, ?)
    `;

    // Execute the query
    db.query(query, [user_id, start_date, end_date, leave_type, leave_reason], (err, result) => {
        if (err) {
            console.error("Error inserting leave request:", err);
            return res.status(500).json({ message: 'Error applying for leave' });
        }
        res.status(201).json({ message: 'Leave request submitted successfully', leave_id: result.insertId });
    });
});

//details of the leaves of the own user only
// API to get full leave details for the authenticated user
router.get('/api/leave/my-leaves', authenticateToken, (req, res) => {
    // Extract the user's ID from the JWT token
    const user_id = req.user.id;  // Assumes req.user.id is set by authenticateToken middleware

    // SQL query to fetch all specified fields for the user's leave requests
    const query = `
        SELECT leave_id, start_date, end_date, leave_type, leave_reason, status, reviewed_by, reviewed_date
        FROM Leaves
        WHERE user_id = ?
    `;

    // Execute the query with the user's ID
    db.query(query, [user_id], (err, results) => {
        if (err) {
            console.error("Error retrieving leave requests:", err);
            return res.status(500).json({ message: 'Error fetching leave requests' });
        }
        res.status(200).json({ leaves: results });
    });
});


// ----------------------------------------------------------------------------------------------------------------------

// -----------------------------------PROJECTS------------------------------------------------------------------


//-----FOR A PARTICULAR USER-------------------

// API to fetch projects assigned to the logged-in user
router.get('/user/userprojects', authenticateToken, async (req, res) => {
    try {
        // Extract the user_id from the request (already retrieved via your middleware)
        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized: User ID missing' });
        }
        // console.log(userId);

        // if (!userId) {
        //     return res.status(401).json({ error: 'Unauthorized: User not logged in' });
        // }

        // Query to fetch project details for the logged-in user
        const query = `
            SELECT 
                p.project_name, 
                p.project_description, 
                p.project_status, 
                pa.deadline_assigned, 
                pa.project_assigned_date, 
                pa.assigned_time_given
            FROM 
                Projects p
            INNER JOIN 
                Projects_Assigned pa ON p.project_id = pa.project_id
            WHERE 
                pa.employee_id = ?;
        `;


        const [rows] = await db.promise().query(query, [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'No projects found for the user.' });
        }

        res.json(rows);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;