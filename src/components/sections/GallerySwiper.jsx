import React, { useState, useEffect } from 'react';
import './GallerySwiper.scss';

const GallerySwiper = ({ title = "Gallery Showcase", subtitle = "Discover Our Collection" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Demo images - replace with your actual images
    const demoImages = [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop'
    ];

    // Auto-change images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % demoImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [demoImages.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="gallery-swiper">
            <div className="swiper-container">
                {demoImages.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                
                {/* Centered Text Overlay */}
                <div className="text-overlay">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>

                {/* Navigation Dots */}
                <div className="dots-container">
                    {demoImages.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GallerySwiper;