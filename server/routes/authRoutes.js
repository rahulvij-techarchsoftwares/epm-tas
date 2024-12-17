
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../dbconnect/dbconnect'); 


// Create an Express Router
const router = express.Router();

const JWT_SECRET = crypto.randomBytes(64).toString('hex');


// Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token after 'Bearer'
    
    if (!token) return res.status(401).json({ message: 'Token not provided' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });

        req.user = decoded; // Attach decoded token data to request
        console.log("Decoded token:", decoded); // Debugging line to see the decoded token
        next(); // Proceed to the next middleware or route handler
    });
}



// User Authentication Route (Login)
router.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        console.log("Login request payload:", req.body);

        db.query('SELECT * FROM Users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                console.error("Database query error:", err);
                return res.status(500).json({ message: "Internal server error" });
            }

            if (results.length === 0) {
                console.log("User not found for email:", email);
                return res.status(400).json({ message: "User not found" });
            }

            const user = results[0];

            try {
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    console.log("Password mismatch for email:", email);
                    return res.status(400).json({ message: "Incorrect password" });
                }

                if (!JWT_SECRET) {
                    console.error("JWT_SECRET is not defined!");
                    return res.status(500).json({ message: "Server configuration error" });
                }

                const token = jwt.sign(
                    { id: user.user_id, role_id: user.role_id },
                    JWT_SECRET,
                    { expiresIn: '5h' }
                );

                console.log("User logged in successfully:", user.user_id);
                return res.status(200).json({ token, role_id: user.role_id });

            } catch (bcryptError) {
                console.error("Bcrypt error:", bcryptError);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});




// User Registration Route
router.post('/api/auth/register', (req, res) => {
    const { username, email, password, role_id, department_id } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Insert the user with the department_id
    db.query(
        'INSERT INTO Users (username, email, password, role_id, department_id) VALUES (?, ?, ?, ?, ?)', 
        [username, email, hashedPassword, role_id, department_id],
        (err) => {
            if (err) {
                return res.status(400).json({ message: "Error registering user" });
            }
            res.json({ message: "User registered successfully" });
        }
    );
});


// Export the router and authenticateToken function
module.exports = { router, authenticateToken };