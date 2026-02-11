import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './MovementEpicsPages.scss';

const MovementEpicsInstitutions = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Different effect: wave motion for hero
            gsap.from('.hero-content > *', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'sine.out'
            });
            // Spiral entrance for content
            gsap.from('.section-content > *', {
                rotation: 180,
                scale: 0.8,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                delay: 0.5,
                ease: 'back.out(2)',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="movement-epics-institutions" ref={pageRef}>
            <DynamicHero vertical="movement-epics" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Movement & Epics Institutions</span>
                    <h1>Partner Network</h1>
                    <p>Collaborating with leading institutions worldwide for cultural preservation.</p>
                </div>
            </DynamicHero>

            <section className="institutions-content section">
                <div className="container">
                    <div className="section-content">
                        <h2>Global Partners</h2>
                        <p>International network of cultural institutions and universities.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovementEpicsInstitutions;