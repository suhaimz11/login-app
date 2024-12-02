const express = require('express');
const jwt = require('jsonwebtoken'); // For decoding the JWT token
const router = express.Router();

// Middleware to protect the profile route
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]; // Get token from 'Bearer token'
    
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user; // Store decoded user information in request
        next(); // Proceed to the next middleware/route handler
    });
};

// Profile route - Protected by authenticateToken middleware
router.get('/profile', authenticateToken, (req, res) => {
    // Assuming you have a user object after JWT decoding
    res.json(req.user); // Return the user data
});

module.exports = router;
