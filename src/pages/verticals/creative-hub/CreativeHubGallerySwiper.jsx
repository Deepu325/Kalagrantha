import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CreativeHubGallerySwiper.scss';

const CreativeHubGallerySwiper = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&h=1080&fit=crop',
            title: 'Digital Innovation Studio',
            subtitle: 'Where technology meets creativity',
            description: 'State-of-the-art digital workspace for modern artists and designers'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop',
            title: 'Collaborative Workspace',
            subtitle: 'Creating together',
            description: 'Open spaces designed for creative collaboration and inspiration'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
            title: 'Gallery Exhibitions',
            subtitle: 'Showcasing innovation',
            description: 'Professional exhibition space for emerging and established artists'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
            title: 'Workshop Studios',
            subtitle: 'Learn and create',
            description: 'Hands-on learning environments with professional equipment'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.slide-content', {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        }, swiperRef);

        return () => ctx.revert();
    }, [activeSlide]);

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="creative-hub-gallery-swiper" ref={swiperRef}>
            <div className="swiper-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === activeSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-overlay"></div>
                        {index === activeSlide && (
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <h3>{slide.subtitle}</h3>
                                <p>{slide.description}</p>
                                <div className="slide-cta">
                                    <button className="explore-btn">Explore Space</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="swiper-controls">
                <button className="nav-btn prev" onClick={prevSlide}>
                    <span>‹</span>
                </button>
                <button className="nav-btn next" onClick={nextSlide}>
                    <span>›</span>
                </button>
            </div>

            <div className="swiper-pagination">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <span className="dot-inner"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CreativeHubGallerySwiper;