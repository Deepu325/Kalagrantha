import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './MovementEpicsPages.scss';

const MovementEpicsModules = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Different effect: elastic bounce for hero
            gsap.from('.hero-content > *', {
                y: -20,
                opacity: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: 'elastic.out(1, 0.5)'
            });
            // Flip and fade for content
            gsap.from('.section-content > *', {
                rotationY: 90,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                delay: 0.4,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="movement-epics-modules" ref={pageRef}>
            <DynamicHero vertical="movement-epics" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Movement & Epics Modules</span>
                    <h1>Structured Learning Pathways</h1>
                    <p>Comprehensive modules covering global cultural movement traditions.</p>
                </div>
            </DynamicHero>

            <section className="modules-content section">
                <div className="container">
                    <div className="section-content">
                        <h2>Learning Modules</h2>
                        <p>Systematic approach to cultural movement education.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovementEpicsModules;