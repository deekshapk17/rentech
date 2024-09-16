// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login Page</h1>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
        <p className="register-link">
          New to us? <Link to="/signup" className='link'>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
