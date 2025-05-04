import React, { useState } from 'react';
import "../css/ProductCard.css"

const ProductCard = ({ imageUrl, description, uploaderName }) => {
  const [showDescription, setShowDescription] = useState(true);

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="product-card">
    <div style={{ border: '1px solid #ccc', padding: '16px', maxWidth: '300px' }}>
      <img
        src={imageUrl}
        alt="Product"
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
      />
      {showDescription && <p>{description}</p>}
      {uploaderName && <p>Uploaded by: {uploaderName}</p>}
      <button onClick={toggleDescription}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
    </div>
    </div>
  );
};

export default ProductCard;
