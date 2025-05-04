import React from 'react';
import '../css/Footer.css'; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Kura Roots. All rights reserved.</p>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;