// index.js (main server file)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/signup');  // Your signup routes
const loginRoutes = require('./routes/login');  // Your login routes
const protectedRoutes = require('./routes/protected');  // The protected route we just created
const cors = require('cors'); // Import the CORS middleware

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming requests
app.use(express.json());

// Use the routes
app.use('/api/signup', userRoutes);
app.use('/api/login', loginRoutes);
app.use('/api', protectedRoutes);  // Use the protected routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
