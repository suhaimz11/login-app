// src/api.js
export const fetchProfile = async () => {
    const token = localStorage.getItem('token');  // Get the token from localStorage

    if (!token) {
        console.error('No token found');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
            },
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Profile data:', data);
            return data;  // Return the profile data to be used in the component
        } else {
            console.error('Error fetching profile:', data.message);
            alert('Error fetching profile: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    }
};
