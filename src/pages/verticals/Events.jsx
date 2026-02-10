import React from 'react';
import { useNav } from '../../context/NavContext';
import GallerySection from '../../components/sections/GallerySection';
import eventsHeroImg from '../../assets/images/events_hero_bg.png';
import './VerticalPage.scss';

const Events = () => {
    const { activeVertical } = useNav();
    if (!activeVertical) return null;

    return (
        <div className="vertical-page events-page">
            <header className="page-hero video-bg has-bg">
                <div className="hero-bg-wrapper">
                    <img src={eventsHeroImg} alt={activeVertical.name} className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">{activeVertical.name}</span>
                        <h1 className="bold-title">{activeVertical.cta.toUpperCase()}</h1>
                        <p>{activeVertical.description}</p>
                        <button className="cta-button">Book Us</button>
                    </div>
                </div>
            </header>

            <section className="services section">
                <div className="container">
                    {activeVertical.features?.map((feature, i) => (
                        <div key={i} className={`service-row ${i % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="service-info">
                                <h2>{feature.title}</h2>
                                <p>{feature.text}</p>
                            </div>
                            <div className="service-image-placeholder"></div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="clients-section section">
                <div className="container">
                    <h2 className="section-title">Institutional Partners</h2>
                    <div className="client-list">
                        {activeVertical.clients?.map((client, i) => (
                            <div key={i} className="client-badge">
                                <span>{client}</span>
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

            <GallerySection images={[
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
                'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
                'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
                'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
            ]} />
        </div>
    );
};

export default Events;
