/*
import woman1 from '../images/woman1.jpg'; // go up one level to reach images
import logo from '../images/logo.png'; // go up one level to reach images

function Home() {
  return (
    <div className="woman1-section">
            <img
              src={woman1}
              alt="KuRoots Logo"
              className="woman1-img"
            />
  </div>
  );
}

export default Home;
*/
/*
import React from 'react';
import '../css/Home.css';
import woman1 from '../images/woman1.jpg'; // Update path if needed

function Home() {
  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <h1>Welcome to <span className="green-text">Kura Roots</span></h1>
        <p>Discover natural hair care tips, products, and styles made just for you.</p>
        <button className="cta-button">Explore Now</button>
      </div>
      <div className="welcome-image">
        <img src={woman1} alt="Natural Hair Woman" />
      </div>
    </section>
  );
}

export default Home;
*/
import React from 'react';
import '../css/Home.css';

import heroImage from '../images/woman1.jpg'; // make sure path is correct

function Home() {
  return (
    <div className="hero-container">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-text">
          KuRoots
        </div>
      </div>
    </div>
  );
}

export default Home;