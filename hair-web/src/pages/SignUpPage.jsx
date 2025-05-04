import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SignUpPage.css"; // Reuse the same CSS as LoginPage

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registering:", email, password);
    // Handle registration logic here
  };

  return (
    <div className="signup-page-container">
      <div className="signup-card">
        <h2>Create Your Account 🌿</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
          <input
            type="password"
            placeholder="Confirm Password 🔒"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Log in here 🌲
          </Link>
        </p>
      </div>
    </div>
  );
}
