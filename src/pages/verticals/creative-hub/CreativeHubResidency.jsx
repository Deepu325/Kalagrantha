import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CreativeHubSubPages.scss';

gsap.registerPlugin(ScrollTrigger);

const CreativeHubResidency = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.page-hero h1', { y: 60, duration: 0.8, ease: 'power3.out' });
            gsap.from('.page-hero p', { y: 40, duration: 0.6, delay: 0.2, ease: 'power3.out' });
            gsap.from('.residency-card', { y: 80, duration: 0.7, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.residency-section', start: 'top 80%' } });
        }, pageRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="creative-hub-page" ref={pageRef}>
            <section className="page-hero">
                <div className="container">
                    <h1>Artist Residency Program</h1>
                    <p>Immersive creative spaces for emerging and established artists</p>
                </div>
            </section>

            <section className="residency-section section">
                <div className="container">
                    <div className="residency-grid">
                        <div className="residency-card">
                            <h3>Short-term Residency</h3>
                            <span className="duration">1-3 Months</span>
                            <p>Perfect for focused project development with access to all studio facilities.</p>
                            <ul>
                                <li>Private studio space</li>
                                <li>24/7 access</li>
                                <li>Mentorship sessions</li>
                                <li>Final showcase</li>
                            </ul>
                            <div className="residency-cta">
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>

                        <div className="residency-card">
                            <h3>Long-term Residency</h3>
                            <span className="duration">6-12 Months</span>
                            <p>Extended program for major artistic endeavors and research projects.</p>
                            <ul>
                                <li>Dedicated workspace</li>
                                <li>Monthly stipend</li>
                                <li>Exhibition opportunity</li>
                                <li>Publication support</li>
                            </ul>
                            <div className="residency-cta">
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>

                        <div className="residency-card">
                            <h3>International Exchange</h3>
                            <span className="duration">3-6 Months</span>
                            <p>Cultural exchange program with partner institutions worldwide.</p>
                            <ul>
                                <li>Travel support</li>
                                <li>Cultural immersion</li>
                                <li>Cross-cultural projects</li>
                                <li>Global network access</li>
                            </ul>
                            <div className="residency-cta">
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeHubResidency;