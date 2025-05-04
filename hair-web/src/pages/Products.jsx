import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <ProductCard
        imageUrl="https://via.placeholder.com/300"
        description="This is product 1"
        uploaderName="Alice"
      />
      <ProductCard
        imageUrl="https://via.placeholder.com/300"
        description="This is product 2"
        uploaderName="Bob"
      />
      <ProductCard
        imageUrl="https://via.placeholder.com/300"
        description="This is product 3"
        uploaderName="Jan"
      />
    </div>
  );
};

export default Products;