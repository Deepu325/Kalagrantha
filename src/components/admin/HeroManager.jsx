import React, { useState, useEffect } from 'react';
import './HeroManager.scss';

const HeroManager = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const verticals = [
        { value: 'all', label: 'All Pages' },
        { value: 'home', label: 'Home Page' },
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
            const response = await fetch('http://localhost:5000/api/admin/hero', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setImages(data);
            }
        } catch (error) {
            console.error('Failed to fetch hero images:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteImage = async (id) => {
        if (!confirm('Are you sure you want to delete this hero image?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:5000/api/admin/hero/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setImages(images.filter(img => img._id !== id));
            }
        } catch (error) {
            console.error('Failed to delete hero image:', error);
        }
    };

    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.vertical === filter);

    if (loading) {
        return <div className="loading">Loading hero images...</div>;
    }

    return (
        <div className="hero-manager">
            <div className="manager-header">
                <div className="filter-section">
                    <label htmlFor="vertical-filter">Filter by Page:</label>
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
                    <span>{filteredImages.length} hero images</span>
                </div>
            </div>

            {filteredImages.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">🖼️</div>
                    <h3>No hero images found</h3>
                    <p>Upload hero images to customize page backgrounds</p>
                </div>
            ) : (
                <div className="images-grid">
                    {filteredImages.map(image => (
                        <div key={image._id} className="hero-card">
                            <div className="image-container">
                                <img 
                                    src={`http://localhost:5000${image.imageUrl}`} 
                                    alt={image.title || 'Hero image'}
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
                            <div className="hero-info">
                                <h4>{image.title || 'Untitled'}</h4>
                                <div className="hero-meta">
                                    <span className="page">{image.vertical}</span>
                                    <span className="order">Order: {image.order}</span>
                                </div>
                                <div className="hero-date">
                                    {new Date(image.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeroManager;