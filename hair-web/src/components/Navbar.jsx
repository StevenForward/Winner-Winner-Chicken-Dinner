import { useState } from 'react';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; // ✅ import the logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    //logo:
    <header className="hair-header">
      <div className="logo">
        <img
          src={logo}
          alt="KuRoots Logo"
          className="logo-img"
          onClick={() => navigate('/')}
        />
      </div>

      {/* Hamburger + X button wrapper */}
      <div className="hamburger-wrapper">
        {!menuOpen ? (
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <div
                className="close-btn"
                onClick={() => {
                setMenuOpen(false);
                navigate('/');
                }}
            >
                ✕
          </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#">Hair Types ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Curly</a></li>
              <li><a href="#">Coily</a></li>
              <li><a href="#">Straight</a></li>
              <li><a href="#">Wavy</a></li>
            </ul>
          </li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Tips</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
          <li className="dropdown">
            <a href="#">Account ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}
