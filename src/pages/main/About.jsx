import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animations - medium effects
            gsap.from('.about-hero h1', { 
                y: 40, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power2.out', 
                clearProps: 'all' 
            });
            gsap.from('.about-hero .lead', { 
                y: 30, 
                opacity: 0, 
                duration: 0.6, 
                delay: 0.2, 
                ease: 'power2.out', 
                clearProps: 'all' 
            });

            // Content animations - medium effects
            gsap.from('.content-wrapper p', { 
                y: 30, 
                opacity: 0, 
                duration: 0.6, 
                delay: 0.3, 
                stagger: 0.1, 
                ease: 'power2.out', 
                scrollTrigger: { trigger: '.content-wrapper', start: 'top 80%' }, 
                clearProps: 'all' 
            });
            gsap.from('.cta-section .about-cta-button', { 
                y: 25, 
                opacity: 0, 
                duration: 0.5, 
                delay: 0.8, 
                stagger: 0.08, 
                ease: 'back.out(1.2)', 
                scrollTrigger: { trigger: '.cta-section', start: 'top 80%' }, 
                clearProps: 'all' 
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="about-page" ref={pageRef}>
            <section className="about-hero">
                <div className="container">
                    <h1>About Kalagrantha</h1>
                    <p className="lead">Nurturing Creativity Through Movement & Arts</p>
                </div>
            </section>

            <section className="about-content section">
                <div className="container">
                    <div className="content-wrapper">
                        <p>
                            <span className="highlight">Kalagrantha – The Art Hub</span> is a premier movement and performing arts education organization based in Bangalore, dedicated to nurturing <span className="emphasis">creativity, discipline, wellness, and cultural appreciation</span> in learners of all ages.
                        </p>
                        <p>
                            At its core, Kalagrantha blends <span className="emphasis">performing arts and holistic education</span>—including dance, yoga, theatre, martial arts, and movement—into structured programs that promote <span className="emphasis">physical development, emotional intelligence, and social confidence</span>. These programs are designed to enrich school curricula and provide students with meaningful learning outcomes.
                        </p>
                        <p>
                            Kalagrantha understands the challenges that schools face in providing consistent, high-quality performing arts education. To address these, it offers <span className="emphasis">expert instructors, a well-defined progression framework, and a reliable, consistent schedule</span> of classes, ensuring impactful learning and growth.
                        </p>
                        <p>
                            The institution's holistic approach not only develops physical finesse and artistic skill but also fosters <span className="emphasis">emotional growth, teamwork, and creative expression</span>. With <span className="highlight">international recognition, awards, and partnerships</span>, Kalagrantha brings credibility and excellence to every educational engagement.
                        </p>
                        <p>
                            By partnering with schools and organizations, Kalagrantha enhances traditional academics with innovative movement education that boosts <span className="emphasis">student engagement, confidence, and well-rounded development</span>.
                        </p>
                        <div className="cta-section">
                            <Link to="/contact" className="about-cta-button">Get in Touch</Link>
                            <Link to="/home" className="about-cta-button secondary">Explore Programs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
