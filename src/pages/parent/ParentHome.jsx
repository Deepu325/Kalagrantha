import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { VERTICALS } from '../../constants/verticals';
import parentHeroImg from '../../assets/images/parent_hero_bg.png';
import './ParentHome.scss';

const ParentHome = () => {
    const heroRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-content h1', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.hero-content p', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out',
            });
            gsap.from('.vertical-card', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                delay: 0.5,
                ease: 'power3.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="parent-home" ref={heroRef}>
            <section className="hero">
                <div className="hero-image-wrapper">
                    <img src={parentHeroImg} alt="Kala Ecosystem" className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <h1>Transcend Boundaries Through Art & Movement</h1>
                        <p>A culturally rooted yet globally positioned ecosystem for movement, education, and creative expression.</p>
                    </div>
                </div>
            </section>

            <section className="verticals-grid" ref={cardsRef}>
                <div className="container">
                    <div className="grid">
                        {VERTICALS.map((v, index) => (
                            <Link key={v.id} to={v.path} className={`vertical-card theme-${v.id}`}>
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

            <section className="vision section">
                <div className="container">
                    <div className="vision-content">
                        <span className="subtitle">Our Philosophy</span>
                        <h2>Bridging heritage with future-ready movement sciences.</h2>
                        <p>
                            We believe in the power of movement as a universal language. From the classical depths of cultural
                            curriculum to the experimental edges of creative collaboration, our ecosystem is designed to
                            foster growth, excellence, and institutional depth.
                        </p>
                    </div>
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
