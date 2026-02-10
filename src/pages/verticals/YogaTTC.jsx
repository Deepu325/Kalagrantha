import React from 'react';
import { useNav } from '../../context/NavContext';
import yogaHeroImg from '../../assets/images/yoga_ttc_hero_bg.png';
import './VerticalPage.scss';

const YogaTTC = () => {
    const { activeVertical } = useNav();
    if (!activeVertical) return null;

    return (
        <div className="vertical-page yoga-ttc-page">
            <header className="page-hero minimal has-bg">
                <div className="hero-bg-wrapper">
                    <img src={yogaHeroImg} alt={activeVertical.name} className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">{activeVertical.name}</span>
                        <h1>{activeVertical.cta}</h1>
                        <p>{activeVertical.description}</p>
                        <div className="cert-badges">
                            <span>RYT 200</span>
                            <span>RYT 500</span>
                            <span>YACEP</span>
                        </div>
                    </div>
                </div>
            </header>

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

            <section className="curriculum-overview section">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Certification Curriculum</h2>
                        <p>A comprehensive breakdown of our training hours and subjects.</p>
                    </div>
                    <div className="curriculum-breakdown">
                        {activeVertical.curriculum?.map((item, i) => (
                            <div key={i} className="curr-item-v2">
                                <div className="subject">
                                    <h4>{item.subject}</h4>
                                </div>
                                <div className="hours">
                                    <span>{item.hours} Contact Hours</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="program-features section">
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
        </div>
    );
};

export default YogaTTC;
