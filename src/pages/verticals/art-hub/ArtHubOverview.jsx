import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './ArtHubPages.scss';

const ArtHubOverview = () => {
    const pageRef = useRef(null);

    const overviewData = {
        mission: "To preserve, innovate, and elevate the performing arts through rigorous training, cultural immersion, and contemporary expression.",
        philosophy: "We believe that dance is a living language that connects tradition with innovation, discipline with creativity, and individual expression with collective heritage.",
        pillars: [
            {
                title: "Classical Roots",
                description: "Deep foundation in traditional Indian dance forms with authentic lineage and rigorous technique training.",
                icon: "🏛️"
            },
            {
                title: "Contemporary Edge", 
                description: "Modern choreographic approaches that push boundaries while respecting classical foundations.",
                icon: "⚡"
            },
            {
                title: "Performance Culture",
                description: "Regular showcases, competitions, and collaborative projects that build confidence and artistry.",
                icon: "🎭"
            },
            {
                title: "Cultural Immersion",
                description: "Understanding the historical, spiritual, and cultural contexts that give meaning to movement.",
                icon: "🌍"
            }
        ],
        stats: [
            { value: '500+', label: 'Active Students' },
            { value: '25+', label: 'Years of Excellence' },
            { value: '15', label: 'Expert Faculty' },
            { value: '200+', label: 'Performances Annually' }
        ]
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-content > *', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });
            gsap.from('.section-content > *', {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.05,
                delay: 0.3,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="art-hub-overview" ref={pageRef}>
            <DynamicHero vertical="art-hub" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Art Hub Overview</span>
                    <h1>Excellence in Movement Arts</h1>
                    <p>Discover our mission, philosophy, and commitment to preserving and innovating the performing arts.</p>
                </div>
            </DynamicHero>

            <section className="overview-content section">
                <div className="container">
                    <div className="section-content">
                        <div className="mission-statement">
                            <h2>Our Mission</h2>
                            <p className="mission-text">{overviewData.mission}</p>
                        </div>
                        
                        <div className="philosophy">
                            <h3>Our Philosophy</h3>
                            <p>{overviewData.philosophy}</p>
                        </div>

                        <div className="pillars-section">
                            <h3>Core Pillars</h3>
                            <div className="pillars-grid">
                                {overviewData.pillars.map((pillar, index) => (
                                    <div key={index} className="pillar-card">
                                        <div className="pillar-icon">{pillar.icon}</div>
                                        <div className="pillar-number">{String(index + 1).padStart(2, '0')}</div>
                                        <h4>{pillar.title}</h4>
                                        <p>{pillar.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="stats-section">
                            <h3>Our Impact</h3>
                            <div className="stats-grid">
                                {overviewData.stats.map((stat, index) => (
                                    <div key={index} className="stat-card">
                                        <span className="stat-value">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtHubOverview;