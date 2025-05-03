import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Add scroll listener for box shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <header className={`hair-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">KuRoots</div>

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
