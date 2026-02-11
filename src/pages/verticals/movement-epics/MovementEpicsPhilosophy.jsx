import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './MovementEpicsPages.scss';

const MovementEpicsPhilosophy = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Different effect: rotate and fade for hero
            gsap.from('.hero-content > *', {
                rotation: 5,
                y: 25,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power2.out'
            });
            // Slide from right for content
            gsap.from('.section-content > *', {
                x: 40,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                delay: 0.3,
                ease: 'power3.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="movement-epics-philosophy" ref={pageRef}>
            <DynamicHero vertical="movement-epics" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Movement & Epics Philosophy</span>
                    <h1>Ancient Wisdom, Modern Expression</h1>
                    <p>Understanding the philosophical foundations of cultural movement traditions.</p>
                </div>
            </DynamicHero>

            <section className="philosophy-content section">
                <div className="container">
                    <div className="section-content">
                        <h2>Core Philosophy</h2>
                        <p>Movement as a vessel for cultural storytelling and preservation.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovementEpicsPhilosophy;