import React from 'react';
import HairPoster from '../components/hairposter';
import '../css/HairTypes.css';

export default function HairTypes() {
  const hairTypes = [
    {
      type: "Type 1A – Straight",
      image: "../img/1a.JPG", // 🔁 Update with your actual image paths
      description: " Very straight, fine, thin, and soft with no curl or wave"
    },
    {
      type: "Type 1B – Straight",
      image: "../img/1b.JPG",
      description: "Straight but with more volume and slight bends"
    },
    {
      type: "Type 1C – Straight",
      image: "../img/1c.JPG",
      description: "Straight with body and a few waves, coarse and resistant to curling"
    },
    {
      type: "Type 2A – Wavy",
      image: "../img/2a.png",
      description: "Loose, fine S-shaped waves with minimal volume"
    },
    {
      type: "Type 2B – Curly",
      image: "../img/2b.png", // 🔁 Update with your actual image paths
      description: "More defined S-waves with slight frizz."
    },
    {
      type: "Type 2C – Wavy",
      image: "../img/2c.jpeg",
      description: "Thicker, coarser waves prone to frizz"
    },
    {
      type: "Type 3A – Curly",
      image: "../img/3a.png",
      description: "Large, loose curls with a definite S-shape"
    },
    {
      type: "Type 3B – Curly",
      image: "../img/3b.png",
      description: "Tighter, springier curls with more volume"
    },
    {
      type: "Type 3C – Curly",
      image: "../img/3c.png",
      description: " Tightly coiled curls with a corkscrew shape"
    },
    {
      type: "Type 4A – Coily/Kinky",
      image: "../img/4a.png",
      description: "Soft, well-defined S-shaped coils"
    },
    {
      type: "Type 4B – Coily/Kinky",
      image: "../img/4b.png",
      description: "Z-shaped curls with less definition and more volume."
    },
    {
      type: "Type 4C – Coily/Kinky",
      image: "../img/4c.png",
      description: "tight Tightest curl pattern with minimal definition and significant shrinkage. coils"
    }
  ];

  return (
    <div className="hair-poster-container">
      <div className='hair-back-img'></div>
      {hairTypes.map((hair, index) => (
        <HairPoster hair={hair} key={index} />
      ))}
    </div>
  );
}
