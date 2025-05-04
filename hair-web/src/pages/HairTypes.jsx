import React from 'react';
import HairPoster from '../components/hairposter';
import '../css/HairTypes.css';

export default function HairTypes() {
  const hairTypes = [
    {
      type: "Type 1 – Straight",
      image: "../img/1a.png", // 🔁 Update with your actual image paths
      description: "Straight hair has no curl pattern and reflects light well. It can very straight, fine or thin textureget oily quickly."
    },
    {
      type: "Type 2 – Wavy",
      image: "../img/type2.jpg",
      description: "Wavy hair forms a loose S-shape and can range from fine to frizzy."
    },
    {
      type: "Type 3 – Curly",
      image: "../img/type3.jpg",
      description: "Curly hair has well-defined spirals and tends to be more prone to dryness."
    },
    {
      type: "Type 4 – Coily/Kinky",
      image: "../images/type4.jpg",
      description: "Coily hair forms tight coils or zig-zags, is fragile, and often shrinks significantly."
    },
    {
      type: "Type 1 – Straight",
      image: "../images/type1.jpg", // 🔁 Update with your actual image paths
      description: "Straight hair has no curl pattern and reflects light well. It can get oily quickly."
    },
    {
      type: "Type 2 – Wavy",
      image: "../images/type2.jpg",
      description: "Wavy hair forms a loose S-shape and can range from fine to frizzy."
    },
    {
      type: "Type 3 – Curly",
      image: "../images/type3.jpg",
      description: "Curly hair has well-defined spirals and tends to be more prone to dryness."
    },
    {
      type: "Type 4 – Coily/Kinky",
      image: "../images/type4.jpg",
      description: "Coily hair forms tight coils or zig-zags, is fragile, and often shrinks significantly."
    },
    {
      type: "Type 4 – Coily/Kinky",
      image: "../images/type4.jpg",
      description: "Coily hair forms tight coils or zig-zags, is fragile, and often shrinks significantly."
    },
    {
      type: "Type 4 – Coily/Kinky",
      image: "../images/type4.jpg",
      description: "Coily hair forms tight coils or zig-zags, is fragile, and often shrinks significantly."
    },
    {
      type: "Type 4 – Coily/Kinky",
      image: "../images/type4.jpg",
      description: "Coily hair forms tight coils or zig-zags, is fragile, and often shrinks significantly."
    },
    {
      type: "Type 4 – Coily/Kinky",
      image: "../images/type4.jpg",
      description: "Coily hair forms tight coils or zig-zags, is fragile, and often shrinks significantly."
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
