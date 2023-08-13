import { useState } from "react";
import './Form.css'
const OlxUpload = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
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
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
            </div>
        </div>
    )
}

export default OlxUpload
