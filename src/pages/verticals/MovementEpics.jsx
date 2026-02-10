import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNav } from '../../context/NavContext';
import epicsHeroImg from '../../assets/images/movement_epics_hero_bg.png';
import './VerticalPage.scss';

const MovementEpics = () => {
    const pageRef = useRef(null);
    const { activeVertical } = useNav();

    useEffect(() => {
        if (!pageRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from('.story-section h2', {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        }, pageRef);

        return () => ctx.revert();
    }, [activeVertical]);

    if (!activeVertical) return null;

    return (
        <div className="vertical-page movement-epics-page" ref={pageRef}>
            <header className="page-hero editorial has-bg">
                <div className="hero-bg-wrapper">
                    <img src={epicsHeroImg} alt={activeVertical.name} className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">{activeVertical.name}</span>
                        <h1 className="large-title">{activeVertical.cta}</h1>
                        <p className="lead">{activeVertical.description}</p>
                    </div>
                </div>
            </header>

            <section className="story-section section">
                <div className="container">
                    <div className="editorial-layout">
                        <div className="editorial-text">
                            <h2>Chapter I: The Philosophy</h2>
                            <p>
                                Our curriculum is designed for institutions and researchers who seek to understand the intersection of
                                history, folklore, and physical expression. We treat every movement as a word in a larger cultural epic.
                            </p>
                            <div className="feature-grid">
                                {activeVertical.features?.map((feature, i) => (
                                    <div key={i} className="feature-box">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="modules-section section">
                <div className="container">
                    <h2 className="section-title">Academic Modules</h2>
                    <div className="module-list">
                        {activeVertical.modules?.map((mod, i) => (
                            <div key={i} className="module-card">
                                <div className="mod-header">
                                    <h3>{mod.title}</h3>
                                    <span className="duration">{mod.duration}</span>
                                </div>
                                <p><strong>Core Focus:</strong> {mod.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stats-section section">
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
        </div>
    );
};

export default MovementEpics;
