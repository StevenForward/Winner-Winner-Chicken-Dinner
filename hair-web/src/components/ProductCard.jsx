import React, { useState } from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ imageUrl, description, uploaderName }) => {
  const [showDescription, setShowDescription] = useState(true);

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt="Product" className="product-image" />
      {showDescription && <p className="product-description">{description}</p>}
      {uploaderName && (
        <p className="product-uploader">Uploaded by: {uploaderName}</p>
      )}
      <button onClick={toggleDescription}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
    </div>
  );
};

export default ProductCard;