import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CreativeHubSubPages.scss';

gsap.registerPlugin(ScrollTrigger);

const CreativeHubStudioSpace = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.page-hero h1', { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' });
            gsap.from('.page-hero p', { y: 40, opacity: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
            gsap.from('.studio-card', { y: 80, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.studio-section', start: 'top 80%' } });
        }, pageRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="creative-hub-page" ref={pageRef}>
            <section className="page-hero">
                <div className="container">
                    <h1>Studio Spaces</h1>
                    <p>State-of-the-art facilities designed for creative excellence</p>
                </div>
            </section>

            <section className="studio-section section">
                <div className="container">
                    <div className="studio-grid">
                        <div className="studio-card">
                            <h3>The Blackbox</h3>
                            <div className="studio-specs">
                                <span className="type">Performance/Rehearsal</span>
                                <span className="size">1200 sq ft</span>
                            </div>
                            <p>Professional performance space with full lighting rig and sound system.</p>
                            <div className="amenities">
                                <span>Full Light Rig</span>
                                <span>Sound System</span>
                                <span>Mirrors</span>
                                <span>Sprung Floor</span>
                            </div>
                        </div>

                        <div className="studio-card">
                            <h3>Neural Forge</h3>
                            <div className="studio-specs">
                                <span className="type">Tech/Media Lab</span>
                                <span className="size">800 sq ft</span>
                            </div>
                            <p>Cutting-edge technology lab for digital art and media production.</p>
                            <div className="amenities">
                                <span>8K Projection</span>
                                <span>VR Setup</span>
                                <span>3D Printers</span>
                                <span>Recording Booth</span>
                            </div>
                        </div>

                        <div className="studio-card">
                            <h3>The Attic</h3>
                            <div className="studio-specs">
                                <span className="type">Design/Craft</span>
                                <span className="size">600 sq ft</span>
                            </div>
                            <p>Bright, airy space perfect for traditional crafts and design work.</p>
                            <div className="amenities">
                                <span>Natural Light</span>
                                <span>Work Benches</span>
                                <span>Storage</span>
                                <span>Ventilation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeHubStudioSpace;