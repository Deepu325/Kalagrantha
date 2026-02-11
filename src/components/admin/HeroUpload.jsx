import React, { useState } from 'react';
import './HeroUpload.scss';

const HeroUpload = () => {
    const [formData, setFormData] = useState({
        title: '',
        vertical: 'home',
        order: 0
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const verticals = [
        { value: 'home', label: 'Home Page' },
        { value: 'art-hub', label: 'Art Hub' },
        { value: 'movement-epics', label: 'Movement & Epics' },
        { value: 'yoga-ttc', label: 'Yoga TTC' },
        { value: 'creative-hub', label: 'Creative Hub' },
        { value: 'events', label: 'Events' }
    ];

    const handleFileSelect = (file) => {
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setMessage('Please select an image file');
            return;
        }

        setUploading(true);
        setMessage('');

        const uploadData = new FormData();
        uploadData.append('image', selectedFile);
        uploadData.append('title', formData.title);
        uploadData.append('vertical', formData.vertical);
        uploadData.append('order', formData.order);

        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('http://localhost:5000/api/admin/hero/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: uploadData
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Hero image uploaded successfully!');
                setFormData({ title: '', vertical: 'home', order: 0 });
                setSelectedFile(null);
                setPreview(null);
            } else {
                setMessage(data.error || 'Upload failed');
            }
        } catch (error) {
            setMessage('Upload failed. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="hero-upload">
            <div className="upload-container">
                <form onSubmit={handleSubmit} className="upload-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="title">Image Title</label>
                            <input
                                type="text"
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                placeholder="Optional title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="vertical">Page</label>
                            <select
                                id="vertical"
                                value={formData.vertical}
                                onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                                required
                            >
                                {verticals.map(v => (
                                    <option key={v.value} value={v.value}>{v.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="order">Display Order</label>
                            <input
                                type="number"
                                id="order"
                                value={formData.order}
                                onChange={(e) => setFormData({...formData, order: e.target.value})}
                                min="0"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className="file-upload-section">
                        <div className="file-drop-zone">
                            {preview ? (
                                <div className="preview-container">
                                    <img src={preview} alt="Preview" className="preview-image" />
                                    <button 
                                        type="button" 
                                        className="remove-image"
                                        onClick={() => {
                                            setSelectedFile(null);
                                            setPreview(null);
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ) : (
                                <div className="drop-zone-content">
                                    <div className="upload-icon">🖼️</div>
                                    <p>Upload Hero Image</p>
                                    <label htmlFor="hero-file-input" className="file-select-btn">
                                        Choose Image
                                    </label>
                                    <input
                                        type="file"
                                        id="hero-file-input"
                                        accept="image/jpeg,image/jpg,image/png,image/webp"
                                        onChange={(e) => handleFileSelect(e.target.files[0])}
                                        hidden
                                    />
                                    <small>JPG, PNG, WebP (Max 5MB)</small>
                                </div>
                            )}
                        </div>
                    </div>

                    {message && (
                        <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                            {message}
                        </div>
                    )}

                    <button type="submit" disabled={uploading || !selectedFile} className="upload-btn">
                        {uploading ? 'Uploading...' : 'Upload Hero Image'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeroUpload;