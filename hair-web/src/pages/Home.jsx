import React from 'react';
import '../css/Home.css';
import heroImage from '../images/diverse.png'; // make sure path is correct
import Login from "../components/Login"
import Register from "../components/Register"
import logo from '../images/logo.png'; 




function Home() {
    return (
      <div className="hero-container">
        <div className="hero-image">
          <div className="title-background">
            <img src={logo} className="title-logo"/>
            <button className='title-btn'>
              <p>Start Now →</p>
              </button>
          </div>
        </div>
      </div>
    );
  }
export default Home;
