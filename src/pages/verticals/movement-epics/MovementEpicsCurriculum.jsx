import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './MovementEpicsPages.scss';

const MovementEpicsCurriculum = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Different effect: slide from left for hero
            gsap.from('.hero-content > *', {
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
            // Fade and scale for content
            gsap.from('.section-content > *', {
                scale: 0.95,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.4,
                ease: 'back.out(1.7)',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="movement-epics-curriculum" ref={pageRef}>
            <DynamicHero vertical="movement-epics" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Movement & Epics Curriculum</span>
                    <h1>Cultural Heritage in Motion</h1>
                    <p>An academic approach to preserving and performing global cultural narratives through movement.</p>
                </div>
            </DynamicHero>

            <section className="curriculum-content section">
                <div className="container">
                    <div className="section-content">
                        <h2>Academic Excellence</h2>
                        <p>Research-backed curriculum for cultural movement preservation.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovementEpicsCurriculum;