import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import './Home.css';

const Home = () => {
    const [qrText, setQrText] = useState('');
    const [cameraOpen, setCameraOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [money,setmoney] = useState(100);

    const handleScan = (data) => {
        if (data) {
            try {
                const scannedItem = JSON.parse(data.text);
                setItems(prevItems => [...prevItems, scannedItem]);
                setQrText(data.text);
                setCameraOpen(false);
            } catch (error) {
                console.error('Error parsing JSON data:', error);
            }
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    const handleToggleCamera = () => {
        setQrText('');
        setCameraOpen(prevCameraOpen => !prevCameraOpen);
    };

    // Calculate the total price of scanned items
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="home-container">
            <h1 className="welcome-text">Welcome To Our Store</h1>
            
            <div className={`qr-container ${cameraOpen ? 'camera-open' : ''}`}>
                {cameraOpen ? (
                    <React.Fragment>
                        <QrReader
                            delay={300}
                            onError={handleError}
                            onScan={handleScan}
                            style={{ width: '100%' }}
                        />
                        <button onClick={handleToggleCamera} className="close-button">Close Camera</button>
                    </React.Fragment>
                ) : (
                    <></>
                )}
            </div>
            {items.length > 0 && (
                <div className="scanned-items-container">
                    <h2 className="scanned-items-heading">Your items :-</h2>
                    <div className="item-cards-container">
                        {items.map((item, index) => (
                            <div key={index} className="item-card">
                                <p>{item.name}</p>
                                <p> ₹{item.price}</p>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Display the total price */}
            {totalPrice <= 0 ? (<></>) : (<div className="total-price-card">
                <p className="total-price">Total Price:₹{totalPrice.toFixed(2)}</p>
            </div>)}

            <div className="button-container">
                <button onClick={handleToggleCamera} className="scan-button">Scan</button>
                {totalPrice > money ? (<></>) : (<button className="buy-button">Buy now</button>)}
                
            </div>
        </div>
    );
};

export default Home;
