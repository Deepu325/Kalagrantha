import React, { useState } from 'react';
import './GallerySection.scss';

const GallerySection = ({ images = [] }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openLightbox = (index) => {
        setActiveIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            <section className="gallery-section section">
                <div className="container">
                    <h2 className="section-title">Gallery</h2>
                    <div className="gallery-grid">
                        {images.map((img, i) => (
                            <div 
                                key={i} 
                                className="gallery-item"
                                onClick={() => openLightbox(i)}
                            >
                                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="view-icon">+</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                    <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&larr;</button>
                    <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&rarr;</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={images[activeIndex]} alt={`Gallery ${activeIndex + 1}`} />
                        <div className="lightbox-counter">{activeIndex + 1} / {images.length}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySection;
