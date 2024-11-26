const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const signupRoutes = require('./routes/signup'); // Signup routes
const loginRoutes = require('./routes/login');   // Login routes
const protectedRoutes = require('./routes/protected'); // Protected routes

// Initialize dotenv for environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// API Routes
app.use('/api/signup', signupRoutes);  // Routes for signup
app.use('/api/login', loginRoutes);    // Routes for login
app.use('/api', protectedRoutes);      // Routes for protected endpoints

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process on connection failure
    });


// Define the server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
