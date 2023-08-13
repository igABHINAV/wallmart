import React, { useContext, useState } from 'react';
import QrReader from 'react-qr-scanner';
import PDFBill from './PDFbill';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './Home.css';
import AuthContext from '../Context.js/ContexT';

// ----------------------------------------------------------------------------------------------------

//css of bill style sheet
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    item: {
        fontSize: 12,
        marginBottom: 8,
    },
    total: {
        fontSize: 16,
        marginTop: 20,
    },
});
// ----------------------------------------------------------------------------------------------------

const Home = () => {
    let {points , setpoints} = useContext(AuthContext);
    const [qrText, setQrText] = useState('');
    const [cameraOpen, setCameraOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [showPDF, setShowPDF] = useState(false);

    const handleScan = (data) => {
        if (data) {
            try {
                const scannedItem = JSON.parse(data.text);
                setItems((prevItems) => [...prevItems, scannedItem]);
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
        setCameraOpen((prevCameraOpen) => !prevCameraOpen);
    };

    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const clearBillData = () => {
        setItems([]);
        setQrText('');
        setCameraOpen(false);
        
    };

    const generatePDFBill = () => {
        const pdfName = 'Bill.pdf';

        const MyDocument = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.title}>Bill Details</Text>
                    {items.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text>{item.name}: ₹{item.price}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    ))}
                    <Text style={styles.total}>Total Price: ₹{totalPrice}</Text>
                </Page>
            </Document>
        );

        const blob = new Blob([MyDocument], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = pdfName;
        downloadLink.click();
        setShowPDF(true);
        setpoints(points-totalPrice);

        clearBillData();
    };





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
                        <button onClick={handleToggleCamera} className="close-button">
                            Close Camera
                        </button>
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
            {totalPrice <= 0 ? (
                <></>
            ) : (
                <div className="total-price-card">
                    <p className="total-price">Total Price: ₹{totalPrice.toFixed(2)}</p>
                </div>
            )}

            <div className="button-container">
                <button onClick={handleToggleCamera} className="scan-button">
                    Scan
                </button>
                {totalPrice > points ? (
                    <></>
                ) : (
                    <button onClick={generatePDFBill} className="buy-button">
                        Buy now
                    </button>
                )}
            </div>
             <PDFBill items={items} totalPrice={totalPrice} />
        </div>
    );
};

export default Home;
