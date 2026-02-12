import React, { useState, useEffect } from 'react';
import './EventsHeroSwiper.scss';

const EventsHeroSwiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroImages = [
        {
            src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&h=1080&fit=crop',
            title: 'Premium Events & Entertainment',
            subtitle: 'Creating Unforgettable Experiences'
        },
        {
            src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop',
            title: 'Cultural Celebrations',
            subtitle: 'Bridging Tradition with Innovation'
        },
        {
            src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&h=1080&fit=crop',
            title: 'Corporate Events',
            subtitle: 'Professional Excellence in Every Detail'
        },
        {
            src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop',
            title: 'Artistic Showcases',
            subtitle: 'Where Art Meets Entertainment'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <div className="events-hero-swiper">
            <div className="hero-container">
                {heroImages.map((image, index) => (
                    <div 
                        key={index} 
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={image.src} alt={image.title} />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1>{image.title}</h1>
                                <p>{image.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="nav-button prev" onClick={prevSlide}>
                &#8249;
            </button>
            <button className="nav-button next" onClick={nextSlide}>
                &#8250;
            </button>
            
            <div className="pagination">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventsHeroSwiper;