import React, { useState } from 'react';
import Home3 from './Home3';
// ----------------------------------------------------------------------------------------------------

const productStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    margin: '10px',
    width: '200px',
};

const imageStyles = {
    width: '150px',
    height: '150px',
    marginBottom: '10px',
};
// ----------------------------------------------------------------------------------------------------

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: '$15', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 2' },
    // Add more products here

    { id: 1, name: 'Product 1', price: '$10', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: '$15', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 2' },
    

    { id: 1, name: 'Product 1', price: '$10', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: '$15', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 2' },
    
    { id: 1, name: 'Product 1', price: '$10', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: '$15', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 2' },
    
    { id: 1, name: 'Product 1', price: '$10', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: '$15', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 2' },
    
    { id: 1, name: 'Product 1', price: '$10', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: '$15', image: 'https://apod.nasa.gov/apod/image/2308/sombrero_spitzer_3000.jpg', description: 'Description for Product 2' },
    

];

const Home2 = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <br/>
        <br/>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.map(product => (
                    <div key={product.id} style={productStyles}>
                        <img src={product.image} alt={product.name} style={imageStyles} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button
                            style={{ padding: '5px 10px', backgroundColor: '#f0c14b', border: 'none', cursor: 'pointer' }}
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Home3 selectedProduct={selectedProduct} onCloseDetails={handleCloseDetails} />
        </div>
    );
};

export default Home2;
