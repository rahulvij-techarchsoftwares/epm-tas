
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../dbconnect/dbconnect'); // Import the database connection

// Create an Express Router
const router = express.Router();

router.get('/api/departments', (req, res) => {
    db.query('SELECT * FROM Departments', (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching departments' });
      }
      res.json(results);
    });
  });

  
  router.get('/api/departments', (req, res) => {
    db.query('SELECT * FROM Departments', (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching departments' });
      }
      res.json(results);
    });
  });
module.exports = router;