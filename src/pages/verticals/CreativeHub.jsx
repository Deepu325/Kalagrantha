import React from 'react';
import { useNav } from '../../context/NavContext';
import creativeHeroImg from '../../assets/images/creative_hub_hero_bg.png';
import './VerticalPage.scss';

const CreativeHub = () => {
    const { activeVertical } = useNav();
    if (!activeVertical) return null;

    return (
        <div className="vertical-page creative-hub-page">
            <header className="page-hero creative has-bg">
                <div className="hero-bg-wrapper">
                    <img src={creativeHeroImg} alt={activeVertical.name} className="hero-bg-image" />
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

            <section className="spaces-section section">
                <div className="container">
                    <h2 className="section-title">Studio Infrastructure</h2>
                    <div className="spaces-grid">
                        {activeVertical.spaces?.map((space, i) => (
                            <div key={i} className="space-card">
                                <div className="space-info">
                                    <h3>{space.name}</h3>
                                    <span className="type">{space.type}</span>
                                </div>
                                <div className="space-tech">
                                    <p><strong>Available Tech:</strong> {space.tech}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="masonry-gallery section">
                <div className="container">
                    <h2 className="section-title">Ecosystem Focus</h2>
                    <div className="masonry-grid">
                        <div className="masonry-item large">
                            <div className="item-overlay">
                                <h3>{activeVertical.features?.[0]?.title}</h3>
                                <p>{activeVertical.features?.[0]?.text}</p>
                            </div>
                        </div>
                        <div className="masonry-item small">
                            <div className="item-overlay">
                                <h3>{activeVertical.features?.[1]?.title}</h3>
                            </div>
                        </div>
                        <div className="masonry-item medium">
                            <div className="item-overlay">
                                <h3>Collaborative Reach</h3>
                                <p>{activeVertical.stats?.[1]?.label}: {activeVertical.stats?.[1]?.value}</p>
                            </div>
                        </div>
                        <div className="masonry-item wide">
                            <div className="item-overlay">
                                <h3>{activeVertical.features?.[2]?.title}</h3>
                            </div>
                        </div>
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

export default CreativeHub;
