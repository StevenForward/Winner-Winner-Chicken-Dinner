import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function YourStore() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const userEmail = localStorage.getItem('userEmail'); // Assumes email is saved at login
    console.log(userEmail)
  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/my-products?email=${userEmail}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    if (userEmail) {
      fetchUserProducts();
    }
  }, [userEmail]);

  return (
    <div className='your-store-page'>
      <div className="store-title">
        <h2>Your Store</h2>
        <button onClick={() => navigate('/ProductMaker')}>Add Product</button>
      </div>

      <div className="products-grid">
        {products.length === 0 ? (
          <p>No products uploaded yet.</p>
        ) : (
          products.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.title} width="200" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default YourStore;
