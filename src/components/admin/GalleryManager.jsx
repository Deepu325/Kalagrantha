import React, { useState, useEffect } from 'react';
import './GalleryManager.scss';

const GalleryManager = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const verticals = [
        { value: 'all', label: 'All Verticals' },
        { value: 'art-hub', label: 'Art Hub' },
        { value: 'movement-epics', label: 'Movement & Epics' },
        { value: 'yoga-ttc', label: 'Yoga TTC' },
        { value: 'creative-hub', label: 'Creative Hub' },
        { value: 'events', label: 'Events' }
    ];

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('http://localhost:5000/api/admin/gallery', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setImages(data);
            }
        } catch (error) {
            console.error('Failed to fetch images:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteImage = async (id) => {
        if (!confirm('Are you sure you want to delete this image?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:5000/api/admin/gallery/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setImages(images.filter(img => img._id !== id));
                setSelectedImage(null);
            }
        } catch (error) {
            console.error('Failed to delete image:', error);
        }
    };

    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.vertical === filter);

    if (loading) {
        return <div className="loading">Loading images...</div>;
    }

    return (
        <div className="gallery-manager">
            <div className="manager-header">
                <div className="filter-section">
                    <label htmlFor="vertical-filter">Filter by Vertical:</label>
                    <select
                        id="vertical-filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        {verticals.map(v => (
                            <option key={v.value} value={v.value}>{v.label}</option>
                        ))}
                    </select>
                </div>
                <div className="stats">
                    <span>{filteredImages.length} images</span>
                </div>
            </div>

            {filteredImages.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">🖼️</div>
                    <h3>No images found</h3>
                    <p>Upload some images to get started</p>
                </div>
            ) : (
                <div className="images-grid">
                    {filteredImages.map(image => (
                        <div key={image._id} className="image-card">
                            <div className="image-container">
                                <img 
                                    src={`http://localhost:5000${image.imageUrl}`} 
                                    alt={image.title}
                                    onClick={() => setSelectedImage(image)}
                                />
                                <div className="image-overlay">
                                    <button 
                                        className="delete-btn"
                                        onClick={() => deleteImage(image._id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                            <div className="image-info">
                                <h4>{image.title}</h4>
                                <div className="image-meta">
                                    <span className="vertical">{image.vertical}</span>
                                    <span className="subsection">{image.subsection}</span>
                                </div>
                                <div className="image-date">
                                    {new Date(image.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="close-modal"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <img 
                            src={`http://localhost:5000${selectedImage.imageUrl}`} 
                            alt={selectedImage.title}
                        />
                        <div className="modal-info">
                            <h3>{selectedImage.title}</h3>
                            <p><strong>Vertical:</strong> {selectedImage.vertical}</p>
                            <p><strong>Subsection:</strong> {selectedImage.subsection}</p>
                            <p><strong>Uploaded:</strong> {new Date(selectedImage.createdAt).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryManager;