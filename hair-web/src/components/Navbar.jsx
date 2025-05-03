import { useState } from 'react';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';

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
          <li><Link to="/">Home</Link></li>

          <li className="dropdown">
          <li><a>Hair Types ▾</a></li>
            <ul className="dropdown-menu">
              <li><Link to="/HairTypes">Curly</Link></li>
              <li><Link to="/HairTypes">Coily</Link></li>
              <li><Link to="/HairTypes">Straight</Link></li>
              <li><Link to="/HairTypes">Wavy</Link></li>
            </ul>
          </li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><a href="#">Login</a></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li className="dropdown">
            <a>Account ▾</a>
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
