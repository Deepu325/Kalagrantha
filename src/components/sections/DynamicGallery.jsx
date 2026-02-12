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
            <div className="dynamic-gallery">
                <div className="gallery-grid">
                    {[
                        {
                            _id: 'demo1',
                            imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop',
                            title: 'Corporate Gala 2024'
                        },
                        {
                            _id: 'demo2', 
                            imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
                            title: 'Cultural Festival'
                        },
                        {
                            _id: 'demo3',
                            imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop', 
                            title: 'Brand Launch Event'
                        },
                        {
                            _id: 'demo4',
                            imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
                            title: 'Film Festival Premiere'
                        },
                        {
                            _id: 'demo5',
                            imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
                            title: 'Music Concert'
                        },
                        {
                            _id: 'demo6',
                            imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
                            title: 'Art Exhibition Opening'
                        }
                    ].map((image, index) => (
                        <div 
                            key={image._id} 
                            className="gallery-item"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img 
                                src={image.imageUrl} 
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
                                src={selectedImage.imageUrl} 
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