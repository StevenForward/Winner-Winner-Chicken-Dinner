import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/LoginPage.css"; // make sure this file exists!
import Login from "../components/Login";

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
        <Login />
        
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
