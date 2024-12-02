import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for redirection
import './Home.css'; // Import your custom styles

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <ul className="sidebar-menu">
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="content">
        <div className="welcome-message">
          <h3>Welcome to your Dashboard!</h3>
        </div>

        <div className="account-summary">
          <h4>Account Summary</h4>
          <div className="summary-card">
            <h5>Recent Activity</h5>
            <p>View your recent transactions or actions here.</p>
          </div>
          <div className="summary-card">
            <h5>Account Settings</h5>
            <p>Update your personal info and settings here.</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
