import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CreativeHubSubPages.scss';

gsap.registerPlugin(ScrollTrigger);

const CreativeHubCollaborations = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.page-hero h1', { y: 60, duration: 0.8, ease: 'power3.out' });
            gsap.from('.page-hero p', { y: 40, duration: 0.6, delay: 0.2, ease: 'power3.out' });
            gsap.from('.collaboration-card', { x: -80, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.collaborations-section', start: 'top 80%' } });
        }, pageRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="creative-hub-page" ref={pageRef}>
            <section className="page-hero">
                <div className="container">
                    <h1>Creative Collaborations</h1>
                    <p>Cross-disciplinary partnerships that push creative boundaries</p>
                </div>
            </section>

            <section className="collaborations-section section">
                <div className="container">
                    <div className="collaborations-grid">
                        <div className="collaboration-card">
                            <h3>Tech × Art Initiative</h3>
                            <span className="status active">Active</span>
                            <p>Exploring the intersection of artificial intelligence and traditional art forms.</p>
                            <div className="partners">
                                <div className="partners-label">Partners:</div>
                                <div className="partners-list">MIT Media Lab, Google Arts</div>
                            </div>
                        </div>

                        <div className="collaboration-card">
                            <h3>Sustainable Design Lab</h3>
                            <span className="status recruiting">Recruiting</span>
                            <p>Creating eco-friendly art installations using recycled materials.</p>
                            <div className="partners">
                                <div className="partners-label">Partners:</div>
                                <div className="partners-list">Greenpeace, Local Recycling Centers</div>
                            </div>
                        </div>

                        <div className="collaboration-card">
                            <h3>Cultural Heritage Project</h3>
                            <span className="status planning">Planning</span>
                            <p>Documenting and preserving traditional crafts through digital media.</p>
                            <div className="partners">
                                <div className="partners-label">Partners:</div>
                                <div className="partners-list">UNESCO, National Museums</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeHubCollaborations;