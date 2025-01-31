
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const db = require('./dbconnect/dbconnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { router: authroutes, authenticateToken } = require('./routes/authRoutes');
const userroutes = require('./routes/userRoutes');
const globalroutes = require('./routes/globalRoutes');
const superadminroutes = require('./routes/superadminRoutes');
const adminroutes = require('./routes/adminRoutes');
// Initialize Express app
const app = express();
const allowedOrigins = [
    'http://localhost:3000', // Local development
    'https://epm-tas-2.onrender.com' // Live frontend
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

app.use(authroutes);
app.use(userroutes);
app.use(globalroutes);
app.use(superadminroutes);
app.use(adminroutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
