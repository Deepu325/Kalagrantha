import React, { useState, useEffect } from 'react';
import './DynamicGallery.scss';

const DynamicGallery = ({ vertical, subsection = 'main' }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchImages();
    }, [vertical, subsection]);

    const fetchImages = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/gallery/${vertical}`);
            if (response.ok) {
                const data = await response.json();
                const filteredImages = subsection === 'all' 
                    ? data 
                    : data.filter(img => img.subsection === subsection);
                setImages(filteredImages);
            }
        } catch (error) {
            console.error('Failed to fetch gallery:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="gallery-loading">
                <div className="loading-spinner"></div>
                <p>Loading gallery...</p>
            </div>
        );
    }

    if (images.length === 0) {
        return (
            <div className="gallery-empty">
                <div className="empty-icon">🖼️</div>
                <h3>Gallery Coming Soon</h3>
                <p>Images will be displayed here once uploaded by admin</p>
            </div>
        );
    }

    return (
        <div className="dynamic-gallery">
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div 
                        key={image._id} 
                        className="gallery-item"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img 
                            src={`http://localhost:5000${image.imageUrl}`} 
                            alt={image.title}
                            loading="lazy"
                        />
                        <div className="image-overlay">
                            <h4>{image.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DynamicGallery;