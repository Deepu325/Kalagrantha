import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Collaborate.scss';

gsap.registerPlugin(ScrollTrigger);

const Collaborate = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animations - medium effects
            gsap.from('.collaborate-hero h1', { 
                y: 40, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power2.out', 
                clearProps: 'all' 
            });
            gsap.from('.collaborate-hero .lead', { 
                y: 30, 
                opacity: 0, 
                duration: 0.6, 
                delay: 0.2, 
                ease: 'power2.out', 
                clearProps: 'all' 
            });

            // Collaboration cards animations - medium effects
            gsap.from('.collab-card', { 
                y: 60, 
                opacity: 0, 
                duration: 0.7, 
                delay: 0.3, 
                stagger: 0.15, 
                ease: 'power2.out', 
                scrollTrigger: { trigger: '.collaboration-types', start: 'top 80%' }, 
                clearProps: 'all' 
            });
            gsap.from('.collab-icon', { 
                scale: 0.7, 
                opacity: 0, 
                duration: 0.5, 
                delay: 0.6, 
                stagger: 0.1, 
                ease: 'back.out(1.2)', 
                scrollTrigger: { trigger: '.collaboration-types', start: 'top 80%' }, 
                clearProps: 'all' 
            });

            // CTA section animations - medium effects
            gsap.from('.cta-section .cta-box', { 
                y: 50, 
                opacity: 0, 
                duration: 0.7, 
                delay: 0.2, 
                ease: 'power2.out', 
                scrollTrigger: { trigger: '.cta-section', start: 'top 80%' }, 
                clearProps: 'all' 
            });
            gsap.from('.cta-buttons .cta-button', { 
                y: 30, 
                opacity: 0, 
                duration: 0.5, 
                delay: 0.5, 
                stagger: 0.08, 
                ease: 'power2.out', 
                scrollTrigger: { trigger: '.cta-section', start: 'top 80%' }, 
                clearProps: 'all' 
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="collaborate-page" ref={pageRef}>
            <section className="collaborate-hero">
                <div className="container">
                    <h1>Join the Ecosystem</h1>
                    <p className="lead">Whether you are a student, a professional artist, or an institution, there is a place for you here</p>
                </div>
            </section>

            <section className="collaborate-content section">
                <div className="container">
                    <div className="collaboration-types">
                        <div className="collab-card">
                            <div className="collab-icon">🎭</div>
                            <h3>For Artists</h3>
                            <p>Showcase your talent, collaborate with peers, and grow your artistic practice in our supportive community.</p>
                            <ul>
                                <li>Performance opportunities</li>
                                <li>Artist residency programs</li>
                                <li>Collaborative projects</li>
                                <li>Professional development</li>
                                <li>Networking events</li>
                                <li>Mentorship programs</li>
                            </ul>
                            <div className="card-footer">
                                <Link to="/contact" className="card-cta">Get Started</Link>
                            </div>
                        </div>
                        
                        <div className="collab-card featured">
                            <div className="collab-icon">🏛️</div>
                            <h3>For Institutions</h3>
                            <p>Partner with us to bring authentic Indian arts and wellness programs to your organization.</p>
                            <ul>
                                <li>Corporate wellness programs</li>
                                <li>Educational partnerships</li>
                                <li>Cultural exchange initiatives</li>
                                <li>Custom curriculum development</li>
                                <li>Teacher training programs</li>
                                <li>International collaborations</li>
                            </ul>
                            <div className="card-footer">
                                <Link to="/contact" className="card-cta">Partner With Us</Link>
                            </div>
                        </div>
                        
                        <div className="collab-card">
                            <div className="collab-icon">🎓</div>
                            <h3>For Students</h3>
                            <p>Begin your journey in the arts with comprehensive programs designed for all skill levels.</p>
                            <ul>
                                <li>Beginner-friendly courses</li>
                                <li>Scholarship opportunities</li>
                                <li>Mentorship programs</li>
                                <li>Performance platforms</li>
                                <li>Certification programs</li>
                                <li>Career guidance</li>
                            </ul>
                            <div className="card-footer">
                                <Link to="/contact" className="card-cta">Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cta-section">
                        <div className="cta-box">
                            <h3>Ready to Begin Your Journey?</h3>
                            <p>Connect with us to explore collaboration opportunities and find your place in our vibrant ecosystem.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="cta-button primary large">Connect With Us</Link>
                                <Link to="/about" className="cta-button secondary large">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collaborate;