// Register.js (Frontend)
import React, { useState } from 'react';
import "../css/SignUpPage.css"; // Reuse the same CSS as LoginPage

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        setErrorMessage(errorData.message);
        setSuccessMessage('');
        return;
      }

      const data = await response.json(); // Parse the success response
      setSuccessMessage(data.message);
      setErrorMessage('');
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Name ✏️"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ✉️"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password 🔒"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default Register;
