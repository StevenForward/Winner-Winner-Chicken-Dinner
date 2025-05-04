import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/LoginPage.css"; // make sure this file exists!

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add login logic here
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/SignUp" className="signup-link">
            Create one 💫
          </Link>
        </p>
      </div>
    </div>
  );
}
