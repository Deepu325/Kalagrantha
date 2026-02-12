import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNav } from '../../context/NavContext';
import DynamicGallery from '../../components/sections/DynamicGallery';
import GallerySwiper from '../../components/sections/GallerySwiper';
import './VerticalPage.scss';

gsap.registerPlugin(ScrollTrigger);

const MovementEpics = () => {
    const pageRef = useRef(null);
    const { activeVertical } = useNav();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Gallery swiper text animations
            gsap.from('.gallery-swiper .text-overlay h2', {
                y: -40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
            
            gsap.from('.gallery-swiper .text-overlay p', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: 'power2.out'
            });
            
            gsap.from('.gallery-swiper .dots-container .dot', {
                scale: 0,
                rotation: 180,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.5,
                ease: 'back.out(1.7)'
            });
            
            // Different effect: dramatic entrance with rotation and scale
            gsap.from('.hero-cta-group .cta-btn', {
                rotation: 15,
                scale: 0.8,
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)',
                clearProps: 'all'
            });
            // Sections animate with different effects
            gsap.from('.story-section .editorial-text > *', {
                x: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.story-section',
                    start: 'top 80%'
                }
            });
            gsap.from('.module-card', {
                rotationY: 90,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.modules-section',
                    start: 'top 80%'
                }
            });
            gsap.from('.stat', {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: '.stats-section',
                    start: 'top 80%'
                }
            });
        }, pageRef);

        return () => ctx.revert();
    }, [activeVertical]);

    if (!activeVertical) return null;

    return (
        <div className="vertical-page movement-epics-page" ref={pageRef}>
            <header className="page-hero movement-epics-hero" id="movement-epics-home">
                <GallerySwiper 
                    title="Movement & Epics" 
                    subtitle="Where History Meets Movement" 
                />
                <div className="hero-overlay-content">
                    <div className="container">
                        <div className="hero-cta-group">
                            <Link to="/movement-epics/curriculum" className="cta-btn primary">
                                Explore Curriculum
                            </Link>
                            <Link to="/movement-epics/apply" className="cta-btn secondary">
                                Apply Now <span className="arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className="curriculum-section section" id="movement-epics-curriculum">
                {/* ...curriculum content... */}
            </section>

            <section className="story-section section" id="movement-epics-philosophy">
                <div className="container">
                    <div className="editorial-layout">
                        <div className="editorial-text">
                            <h2>Chapter I: The Philosophy</h2>
                            <p>
                                Our curriculum is designed for institutions and researchers who seek to understand the intersection of
                                history, folklore, and physical expression. We treat every movement as a word in a larger cultural epic.
                            </p>
                            <div className="feature-grid">
                                {activeVertical.features?.map((feature, i) => (
                                    <div key={i} className="feature-box">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="modules-section section" id="movement-epics-modules">
                <div className="container">
                    <h2 className="section-title">Academic Modules</h2>
                    <div className="module-list">
                        {activeVertical.modules?.map((mod, i) => (
                            <div key={i} className="module-card">
                                <div className="mod-header">
                                    <h3>{mod.title}</h3>
                                    <span className="duration">{mod.duration}</span>
                                </div>
                                <p><strong>Core Focus:</strong> {mod.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="institutions-section section" id="movement-epics-institutions">
                {/* ...institutions content... */}
            </section>

            <section className="apply-section section" id="movement-epics-apply">
                {/* ...apply content... */}
            </section>

            <section className="stats-section section">
                <div className="container">
                    <div className="stats-grid">
                        {activeVertical.stats?.map((stat, i) => (
                            <div key={i} className="stat">
                                <span className="stat-val">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="gallery-section section">
                <div className="container">
                    <h2 className="section-title">Gallery</h2>
                    <DynamicGallery vertical="movement-epics" />
                </div>
            </section>
        </div>
    );
};

export default MovementEpics;
