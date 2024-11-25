// routes/signup.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');  // Import the User model
const router = express.Router();

// POST /api/signup - Sign up a new user
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists (by username or email)
        const userExists = await User.findOne({ $or: [{ username }, { email }] });
        if (userExists) {
            return res.status(400).json({ message: 'Username or Email already taken' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
