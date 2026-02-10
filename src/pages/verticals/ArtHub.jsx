import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNav } from '../../context/NavContext';
import artHeroImg from '../../assets/images/art_hub_hero_bg.png';
import './VerticalPage.scss';

const ArtHub = () => {
    const pageRef = useRef(null);
    const { activeVertical } = useNav();

    useEffect(() => {
        if (!pageRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from('.hero-content h1', {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.feature-box', {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.features',
                    start: 'top 80%',
                }
            });
        }, pageRef);

        return () => ctx.revert();
    }, [activeVertical]);

    if (!activeVertical) return null;

    return (
        <div className="vertical-page art-hub-page" ref={pageRef}>
            <header className="page-hero has-bg">
                <div className="hero-bg-wrapper">
                    <img src={artHeroImg} alt={activeVertical.name} className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">{activeVertical.name}</span>
                        <h1>{activeVertical.cta}</h1>
                        <p>{activeVertical.description}</p>
                    </div>
                </div>
            </header>

            <section className="features section">
                <div className="container">
                    <div className="feature-grid">
                        {activeVertical.features?.map((feature, i) => (
                            <div key={i} className="feature-box">
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {activeVertical.stats?.map((stat, i) => (
                            <div key={i} className="stat">
                                <span className="stat-val">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faculty-section section">
                <div className="container">
                    <h2 className="section-title">Expert Faculty</h2>
                    <div className="faculty-grid">
                        {activeVertical.faculty?.map((member, i) => (
                            <div key={i} className="faculty-card">
                                <h3>{member.name}</h3>
                                <span className="role">{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="timetable-section section">
                <div className="container">
                    <h2 className="section-title">Schedule</h2>
                    <div className="timetable-list">
                        {activeVertical.classes?.map((cls, i) => (
                            <div key={i} className="timetable-item">
                                <div className="times">
                                    <h4>{cls.name}</h4>
                                    <span>{cls.schedule}</span>
                                </div>
                                <div className="level">
                                    <span>{cls.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtHub;
