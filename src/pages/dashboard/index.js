import React, { useState } from 'react';
import Link from 'next/link';
import CameraBody from '../../components/CameraBody';
import axios from 'axios';

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = async () => {
  //   try {
  //     // Make API call to your backend for authentication using Axios
  //     const response = await axios.post('/api/login', {
  //       // Add necessary user credentials in the request body
  //       email: 'user@example.com',
  //       password: 'password123',
  //     });

  //     if (response.status === 200) {
  //       setLoggedIn(true); // Update login status
  //     } else {
  //       // Handle login error
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
  // };

  // const handleLogout = async () => {
  //   try {
  //     // Make API call to log out using Axios
  //     const response = await axios.post('/api/logout');

  //     if (response.status === 200) {
  //       setLoggedIn(false); // Update login status
  //     } else {
  //       // Handle logout error
  //     }
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //   }
  // };
  
  const containerStyle = {
    backgroundColor: 'cyan',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column', // Stack children vertically
    alignItems: 'flex-end', // Align children to the right side
    minHeight: '100vh',     // Minimum height of viewport
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const resultsComponentStyle = {
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',
    marginTop: 'auto', // Push Results component to the bottom
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ color: 'black' }}>Project In-Focus</h1>
        <div>
          {loggedIn ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <div>
              <Link href="/register" style={{ color: 'white', textDecoration: 'none' }}>
                Sign Up
              </Link>
              <Link href="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <Link href="/about" style={{ color: 'black', textDecoration: 'none' }}>
          Documentation
        </Link>
      </div>
      <CameraBody loggedIn={loggedIn} />
      <div style={resultsComponentStyle}>
        {/* Pass the necessary props to the Results component */}
        
      </div>
    </div>
  );
}
