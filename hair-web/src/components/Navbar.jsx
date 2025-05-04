import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import { useUserContext } from '../contexts/UserContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setMenuOpen(false)
  }

  const {user, removeUser,isUser} = useUserContext();

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

      <div className="hamburger-area">
        {!menuOpen ? (
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <div className="close-btn" onClick={handleClose}>✕</div>
        )}
      </div>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/HairTypes">Hair Types</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Contact">Contact</Link></li>

          {!isUser() && <li><Link to="/Login">Login</Link></li>}

          <li><Link to="/Cart">Cart</Link></li>

          {isUser() && (<li className="dropdown">
            <a>Account ▾</a>
            <ul className="dropdown-menu">
              <li><Link to="/Profile">Profile</Link></li>
              <li><Link to="/YourStore">Your Store</Link></li>
              <li><a href="#" onClick={removeUser}>Logout</a></li>
            </ul>
          </li>) }
        </ul>
      </nav>
    </header>
    
  );
}
