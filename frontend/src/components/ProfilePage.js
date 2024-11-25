// src/components/ProfilePage.js
import React, { useEffect } from 'react';
import { fetchProfile } from '../api';  // Import the fetchProfile function

const ProfilePage = () => {
    useEffect(() => {
        // Call the fetchProfile function when the component mounts
        fetchProfile();
    }, []);  // Empty dependency array means it runs once when the component mounts

    return (
        <div>
            <h2>Your Profile</h2>
            <p>Profile data will be shown here.</p>
        </div>
    );
};

export default ProfilePage;
