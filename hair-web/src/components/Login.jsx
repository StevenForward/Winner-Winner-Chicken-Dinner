import React, { useState } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {user, addUser, removeUser} = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login data to the backend
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Save the JWT token (e.g., store it in localStorage or state)
        localStorage.setItem('token', data.token);
        addUser("User")
        navigate('/')
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2 className='login-title'>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='login-input'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='login-input'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-btn' type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
