import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VERTICALS } from '../../constants/verticals';
import DynamicGallery from '../../components/sections/DynamicGallery';
import parentHeroImg from '../../assets/images/parent_hero_bg.png';
import './ParentHome.scss';

gsap.registerPlugin(ScrollTrigger);

const ParentHome = () => {
    const heroRef = useRef(null);
    const cardsRef = useRef(null);
    const [activeImage, setActiveImage] = React.useState(0);

    const galleryImages = [
        'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1200',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200',
        'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200',
        'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1200',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animations
            gsap.from('.subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all' });
            gsap.from('.hero-title .kala', { y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'all' });
            gsap.from('.hero-title .grantha', { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out', clearProps: 'all' });
            gsap.from('.hero-divider', { scaleX: 0, opacity: 0, duration: 0.6, delay: 0.4, ease: 'power2.out', clearProps: 'all' });
            gsap.from('.hero-manifesto', { y: 20, opacity: 0, duration: 0.8, delay: 0.5, ease: 'power3.out', clearProps: 'all' });
            gsap.from('.cta-button', { y: 20, opacity: 0, duration: 0.8, delay: 0.6, stagger: 0.1, ease: 'power3.out', clearProps: 'all' });

            // Vision section
            gsap.from('.vision .subtitle', { y: 20, opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.vision', start: 'top 80%' }, clearProps: 'all' });
            gsap.from('.vision h2', { y: 30, opacity: 0, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: '.vision', start: 'top 80%' }, clearProps: 'all' });
            gsap.from('.about-text p', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: '.vision', start: 'top 80%' }, clearProps: 'all' });
            gsap.from('.read-more-link', { y: 20, opacity: 0, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: '.vision', start: 'top 80%' }, clearProps: 'all' });

            // Verticals header
            gsap.from('.verticals-header h2', { y: 30, opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.verticals-header', start: 'top 80%' }, clearProps: 'all' });
            gsap.from('.verticals-header p', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: '.verticals-header', start: 'top 80%' }, clearProps: 'all' });

            // Vertical cards
            gsap.from('.vertical-card', { y: 40, opacity: 0, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: '.verticals-grid .grid', start: 'top 80%' }, clearProps: 'all' });

            // Collaborate section
            gsap.from('.collaborate h2', { y: 30, opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.collaborate', start: 'top 80%' }, clearProps: 'all' });
            gsap.from('.collaborate p', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: '.collaborate', start: 'top 80%' }, clearProps: 'all' });
            gsap.from('.collaborate .cta-button', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: '.collaborate', start: 'top 80%' }, clearProps: 'all' });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="parent-home" ref={heroRef}>
            <section className="hero">
                <div className="hero-image-wrapper">
                    {galleryImages.map((img, idx) => (
                        <img 
                            key={idx}
                            src={img} 
                            alt={`Gallery ${idx + 1}`} 
                            className={`hero-bg-image ${activeImage === idx ? 'active' : ''}`}
                        />
                    ))}
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">The Art Hub</span>
                        <h1 className="hero-title">
                            <span className="kala">KALA</span>
                            <span className="grantha">GRANTHA</span>
                        </h1>
                        <div className="hero-divider"></div>
                        <p className="hero-manifesto">A multidisciplinary ecosystem for the performing arts, wellness, and Indian knowledge systems.</p>
                        <div className="hero-cta-group">
                            <Link to="/art-hub" className="cta-button primary">Explore Ecosystem</Link>
                            <Link to="/contact" className="cta-button secondary">Book Consultation</Link>
                        </div>
                    </div>
                </div>
                <div className="gallery-indicators">
                    {galleryImages.map((_, idx) => (
                        <button
                            key={idx}
                            className={`indicator ${activeImage === idx ? 'active' : ''}`}
                            onClick={() => setActiveImage(idx)}
                            aria-label={`View image ${idx + 1}`}
                        />
                    ))}
                </div>
            </section>

            <section className="vision section">
                <div className="container">
                    <div className="vision-content">
                        <span className="subtitle">About Kalagrantha</span>
                        <h2>Nurturing Creativity Through Movement & Arts</h2>
                        <div className="about-text">
                            <p>
                                Kalagrantha – The Art Hub is a premier movement and performing arts education organization based in Bangalore, dedicated to nurturing creativity, discipline, wellness, and cultural appreciation in learners of all ages.
                            </p>
                            <Link to="/about" className="read-more-link">Read More About Us →</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="verticals-grid" ref={cardsRef}>
                <div className="container">
                    <div className="verticals-header">
                        <h2>Explore Our Verticals</h2>
                        <p>Discover specialized programs across arts, movement, and wellness</p>
                    </div>
                    <div className="grid">
                        {VERTICALS.map((v, index) => (
                            <Link key={v.id} to={v.path} className={`vertical-card theme-${v.id}`}>
                                <div className="card-image">
                                    <img src={`https://images.unsplash.com/photo-${v.id === 'art-hub' ? '1508700929628-666bc8bd84ea' : v.id === 'yoga-ttc' ? '1544367567-0f2fcb009e0b' : v.id === 'movement-epics' ? '1503095396549-807759245b35' : v.id === 'creative-hub' ? '1460661419201-fd4cecdf8a8b' : '1492684223066-81342ee5ff30'}?w=600&h=400&fit=crop`} alt={v.shortName} />
                                </div>
                                <div className="card-bg"></div>
                                <div className="card-content">
                                    <span className="card-number">0{index + 1}</span>
                                    <h2>{v.shortName}</h2>
                                    <p>{v.description}</p>
                                    <span className="card-link">Explore Vertical &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="gallery-section section">
                <div className="container">
                    <h2 className="section-title">Gallery Highlights</h2>
                    <DynamicGallery vertical="art-hub" subsection="all" />
                </div>
            </section>

            <section className="collaborate section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Join the Ecosystem</h2>
                        <p>Whether you are a student, a professional artist, or an institution, there is a place for you here.</p>
                        <Link to="/contact" className="cta-button large">Connect With Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ParentHome;
