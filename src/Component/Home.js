import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const Home = () => {
    const [qrText, setQrText] = useState('');
    const [cameraOpen, setCameraOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleScan = (data) => {
        if (data) {
            setItems(prevItems => [...prevItems, data.text]); // Append scanned QR data to items array
            setQrText(data.text);
            setCameraOpen(false);
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    const handleToggleCamera = () => {
        setQrText('');
        setCameraOpen(prevCameraOpen => !prevCameraOpen);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
            <h1>Welcome To Our Store</h1>
            <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
                {cameraOpen ? (
                    <React.Fragment>
                        <QrReader
                            delay={300}
                            onError={handleError}
                            onScan={handleScan}
                            style={{ width: '100%' }}
                        />
                        <button onClick={handleToggleCamera} style={{ marginTop: '10px' }}>Close Camera</button>
                    </React.Fragment>
                ) : (
                    <button onClick={handleToggleCamera} style={{ width: '100%' }}>Scan</button>
                )}
            </div>
            {qrText && <p>{qrText}</p>}
            {items.length > 0 && (
                <div>
                    <h2>Scanned Items:</h2>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                </div>
            )}
            <button >Buy now</button>
        </div>
    );
};

export default Home;
