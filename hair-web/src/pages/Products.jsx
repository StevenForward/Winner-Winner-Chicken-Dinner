import React from 'react';
import ProductCard from '../components/ProductCard'; // adjust path if needed

const Products = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <ProductCard
        imageUrl="https://live-essnc.s3.amazonaws.com/uploads/2023/11/IMG_0023_1400x.webp"
        description="Handcrafted ceramic mug with a beautiful glaze finish."
        uploaderName="Jan"
      />
    </div>
  );
};

export default Products;
