import React, { useState, useEffect } from 'react';
import './EventsGallerySwiper.scss';

const EventsGallerySwiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://picsum.photos/1920/1080?random=1",
            title: "Corporate Excellence",
            subtitle: "Premium Event Production",
            description: "Transforming corporate visions into unforgettable experiences"
        },
        {
            id: 2,
            image: "https://picsum.photos/1920/1080?random=2",
            title: "Cultural Celebrations",
            subtitle: "Heritage & Tradition",
            description: "Showcasing India's rich cultural tapestry through world-class events"
        },
        {
            id: 3,
            image: "https://picsum.photos/1920/1080?random=3",
            title: "Luxury Experiences",
            subtitle: "Bespoke Event Design",
            description: "Crafting exclusive moments that define luxury entertainment"
        },
        {
            id: 4,
            image: "https://picsum.photos/1920/1080?random=4",
            title: "Global Productions",
            subtitle: "International Standards",
            description: "Delivering world-class event experiences across diverse audiences"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="events-gallery-swiper">
            <div className="swiper-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-overlay"></div>
                        <div className="slide-content">
                            <span className="slide-subtitle">{slide.subtitle}</span>
                            <h2 className="slide-title">{slide.title}</h2>
                            <p className="slide-description">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="swiper-controls">
                <button className="nav-btn prev" onClick={prevSlide}>
                    ‹
                </button>
                <button className="nav-btn next" onClick={nextSlide}>
                    ›
                </button>
            </div>

            <div className="swiper-pagination">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventsGallerySwiper;