// src/components/SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './SignupPage.css'; // Import the CSS file
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                email,
                username,
                password,
            });

            setMessage(response.data.message || 'Signup successful!');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error signing up');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group password-container">
                        <label>Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye/> : <FaEyeSlash />}
                        </span>
                    </div>
                    <div className="form-group password-container">
                        <label>Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p className="signup-message">{message}</p>
            </div>
        </div>
    );
};

export default SignupPage;
