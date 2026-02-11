import React, { useState, useEffect } from 'react';
import './YogaGallerySwiper.scss';

const YogaGallerySwiper = ({ title = "Yoga Teacher Training", subtitle = "Transform Your Practice, Transform Lives" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Yoga-specific demo images
    const yogaImages = [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=700&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=700&fit=crop',
        'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=700&fit=crop'
    ];

    // Slower transition for zen feeling
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % yogaImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [yogaImages.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="yoga-gallery-swiper">
            <div className="yoga-swiper-container">
                {yogaImages.map((image, index) => (
                    <div
                        key={index}
                        className={`yoga-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                
                {/* Simplified Text Overlay */}
                <div className="yoga-text-overlay">
                    <h2 className="yoga-title">{title}</h2>
                    <div className="lotus-divider">
                        <span>◦</span>
                        <span>◦</span>
                        <span>◦</span>
                    </div>
                </div>

                {/* Side Navigation Dots */}
                <div className="yoga-dots-container">
                    {yogaImages.map((_, index) => (
                        <button
                            key={index}
                            className={`yoga-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            <span className="dot-inner"></span>
                        </button>
                    ))}
                </div>

                {/* Breathing Animation Indicator */}
                <div className="breathing-indicator">
                    <div className="breath-circle"></div>
                </div>
            </div>
        </div>
    );
};

export default YogaGallerySwiper;