import React, { useState, useEffect } from 'react';
import './DynamicHero.scss';

const DynamicHero = ({ vertical, children, className = '' }) => {
    const [heroImages, setHeroImages] = useState([]);
    const [activeImage, setActiveImage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHeroImages();
    }, [vertical]);

    useEffect(() => {
        if (heroImages.length > 1) {
            const interval = setInterval(() => {
                setActiveImage((prev) => (prev + 1) % heroImages.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [heroImages]);

    const fetchHeroImages = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/hero/${vertical}`);
            if (response.ok) {
                const data = await response.json();
                setHeroImages(data);
            }
        } catch (error) {
            console.error('Failed to fetch hero images:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className={`dynamic-hero loading ${className}`}>
                <div className="hero-loading">Loading...</div>
                <div className="container">{children}</div>
            </div>
        );
    }

    return (
        <div className={`dynamic-hero ${className}`}>
            <div className="hero-bg-wrapper">
                {heroImages.length > 0 ? (
                    heroImages.map((img, idx) => (
                        <img 
                            key={img._id}
                            src={`http://localhost:5000${img.imageUrl}`} 
                            alt={img.title || `Hero ${idx + 1}`} 
                            className={`hero-bg-image ${activeImage === idx ? 'active' : ''}`}
                        />
                    ))
                ) : (
                    <div className="hero-placeholder">
                        <div className="placeholder-content">
                            <h3>No Hero Images</h3>
                            <p>Upload hero images via admin panel</p>
                        </div>
                    </div>
                )}
                <div className="hero-overlay"></div>
            </div>
            
            <div className="container">{children}</div>
            
            {heroImages.length > 1 && (
                <div className="hero-indicators">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            className={`indicator ${activeImage === idx ? 'active' : ''}`}
                            onClick={() => setActiveImage(idx)}
                            aria-label={`View image ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DynamicHero;