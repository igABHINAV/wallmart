import { useState } from "react";
import './OlxUpload.css'
const OlxUpload = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false); // New state

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate submission success
        // For real implementation, handle form submission logic here
        // and then setShowSuccessModal(true);
        setShowSuccessModal(true);
    };
    return (
        <div className="form-container">
            <div className="form-card">
                <h2>Product Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="image-container">
                    <label htmlFor="name">Image:</label>
                        <input
                            type="file"
                            required
                        />
                        <br/>
                    </div>
                    <br/>
                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
                {showSuccessModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Uploaded successfully!</p>
                        <button onClick={() => setShowSuccessModal(false)}>Close</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default OlxUpload
