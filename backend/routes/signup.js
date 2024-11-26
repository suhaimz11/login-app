const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Ensure this path is correct

const router = express.Router();

// POST: /api/signup
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully.' });
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
