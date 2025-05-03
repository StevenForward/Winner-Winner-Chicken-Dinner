import { useState } from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);


  return (
    <header className="hair-header">
      <div className="logo">Glow Hair</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
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
        <a
         href="#"
        onClick={(e) => {
        e.preventDefault();
        setAccountOpen((prev) => !prev); // Toggle Account dropdown
        }}
        >
    Account ▾
  </a>
  <ul className={`dropdown-menu ${accountOpen ? 'show' : ''}`}>
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