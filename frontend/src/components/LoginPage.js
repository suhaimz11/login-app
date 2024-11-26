// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password,
            });

            const { token } = response.data;
            localStorage.setItem('token', token);

            navigate('/home'); // Redirect to profile or dashboard after successful login
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong, please try again.');

        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p> {/* Link to sign up page */}
        </div>
    );
};

export default LoginPage;
