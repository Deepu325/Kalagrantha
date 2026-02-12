import React from 'react';
import { Link } from 'react-router-dom';
import { useNav } from '../../context/NavContext';
import DynamicGallery from '../../components/sections/DynamicGallery';
import YogaGallerySwiper from '../../components/sections/YogaGallerySwiper';
import YogaTTCMobileNavbar from './yoga-ttc/YogaTTCMobileNavbar';
import './VerticalPage.scss';

const YogaTTC = () => {
    const { activeVertical } = useNav();
    if (!activeVertical) return null;

    return (
        <div className="vertical-page yoga-ttc-page">
            <YogaTTCMobileNavbar />
            <header className="page-hero yoga-ttc-zen-hero">
                <YogaGallerySwiper 
                    title="Yoga Teacher Training" 
                    subtitle="Awaken the teacher within, transform lives through ancient wisdom" 
                />
                <div className="zen-overlay-content">
                    <div className="container">
                        <div className="zen-cta-group">
                            <Link to="/yoga-ttc/program" className="zen-btn primary">
                                <span className="btn-text">Explore Journey</span>
                                <span className="btn-icon">🕉</span>
                            </Link>
                            <Link to="/yoga-ttc/register" className="zen-btn secondary">
                                <span className="btn-text">Begin Practice</span>
                                <span className="btn-arrow">→</span>
                            </Link>
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

            <section className="gallery-section section">
                <div className="container">
                    <h2 className="section-title">Gallery</h2>
                    <DynamicGallery vertical="yoga-ttc" />
                </div>
            </section>
        </div>
    );
};

export default YogaTTC;
