// models/User.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,  // Username must be unique
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Email must be unique
    },
    password: {
        type: String,
        required: true,
    },
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
