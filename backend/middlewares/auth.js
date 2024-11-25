// middlewares/auth.js
const jwt = require('jsonwebtoken');

// Middleware to protect routes
const verifyToken = (req, res, next) => {
    // Get token from Authorization header
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token using your JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add user data to the request
        next(); // Move to the next middleware or route handler
    } catch (err) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
