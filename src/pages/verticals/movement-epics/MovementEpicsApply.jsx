import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './MovementEpicsPages.scss';

const MovementEpicsApply = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Different effect: typewriter-like entrance for hero
            gsap.from('.hero-content > *', {
                x: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.25,
                ease: 'power4.out'
            });
            // Morphing scale for content
            gsap.from('.section-content > *', {
                scaleX: 0,
                transformOrigin: 'left center',
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.6,
                ease: 'power3.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="movement-epics-apply" ref={pageRef}>
            <DynamicHero vertical="movement-epics" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Movement & Epics Apply</span>
                    <h1>Join Our Program</h1>
                    <p>Begin your journey in cultural movement research and performance.</p>
                </div>
            </DynamicHero>

            <section className="apply-content section">
                <div className="container">
                    <div className="section-content">
                        <h2>Application Process</h2>
                        <p>Start your academic journey in cultural movement studies.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovementEpicsApply;