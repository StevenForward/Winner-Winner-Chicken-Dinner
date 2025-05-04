import { useNavigate } from 'react-router-dom';

function YourStore() {
    const navigate = useNavigate();

    return <>
        <div className='your-store-page'>
            <div className="store-title">
                <h2>Your Store</h2>
                <button onClick={() => navigate('/ProductMaker')}>Add Product</button>
            </div>
            <div className="products-grid">

            </div>
        </div>
    </>
}

export default YourStore