import React from 'react';

const Home3 = ({ selectedProduct, onCloseDetails }) => {
    if (!selectedProduct) {
        return null;
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', maxWidth: '80%', maxHeight: '80%', overflow: 'auto' }}>
                <h2>{selectedProduct.name}</h2>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', marginBottom: '10px' }} />
                <p>{selectedProduct.description}</p>
                <p>Price: {selectedProduct.price}</p>
                <button style={{ padding: '5px 10px', backgroundColor: '#f0c14b', border: 'none', cursor: 'pointer' }} onClick={onCloseDetails}>
                    Close Details
                </button>
            </div>
        </div>
    );
};

export default Home3;
