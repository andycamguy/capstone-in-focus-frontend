import React, { useState } from 'react';
import Link from 'next/link';
import CameraBody from '../../components/CameraBody';
import axios from 'axios';

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      // Make API call to your backend for authentication using Axios
      const response = await axios.post('/api/login', {
        // Add necessary user credentials in the request body
        email: 'user@example.com',
        password: 'password123',
      });

      if (response.status === 200) {
        setLoggedIn(true); // Update login status
      } else {
        // Handle login error
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      // Make API call to log out using Axios
      const response = await axios.post('/api/logout');

      if (response.status === 200) {
        setLoggedIn(false); // Update login status
      } else {
        // Handle logout error
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Project In-Focus</h1>
      <div className="mb-3">
        <Link href="/">Documentation</Link>
      </div>
      <div className="mb-3">
        <Link href="/about">Teach me more</Link>
      </div>
      {loggedIn ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <div>
          <Link href="/register">Sign Up</Link>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
      <CameraBody loggedIn={loggedIn} />
    </div>
  );
}
