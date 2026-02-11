import React, { useState } from 'react';
import './GalleryUpload.scss';

const GalleryUpload = () => {
    const [formData, setFormData] = useState({
        title: '',
        vertical: 'art-hub',
        subsection: 'main'
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const verticals = [
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

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        handleFileSelect(file);
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
        uploadData.append('subsection', formData.subsection);

        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('http://localhost:5000/api/admin/gallery/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: uploadData
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Image uploaded successfully!');
                setFormData({ title: '', vertical: 'art-hub', subsection: 'main' });
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
        <div className="gallery-upload">
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
                                required
                                placeholder="Enter image title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="vertical">Vertical</label>
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
                            <label htmlFor="subsection">Subsection</label>
                            <input
                                type="text"
                                id="subsection"
                                value={formData.subsection}
                                onChange={(e) => setFormData({...formData, subsection: e.target.value})}
                                placeholder="main"
                            />
                        </div>
                    </div>

                    <div className="file-upload-section">
                        <div 
                            className="file-drop-zone"
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => e.preventDefault()}
                        >
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
                                    <div className="upload-icon">📁</div>
                                    <p>Drag & drop an image here</p>
                                    <span>or</span>
                                    <label htmlFor="file-input" className="file-select-btn">
                                        Choose File
                                    </label>
                                    <input
                                        type="file"
                                        id="file-input"
                                        accept="image/jpeg,image/jpg,image/png,image/webp"
                                        onChange={handleFileInput}
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
                        {uploading ? 'Uploading...' : 'Upload Image'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GalleryUpload;