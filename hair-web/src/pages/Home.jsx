import React from 'react';
import '../css/Home.css';
import heroImage from '../images/woman1.jpg'; // make sure path is correct
import Login from "../components/Login"
import Register from "../components/Register"



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
