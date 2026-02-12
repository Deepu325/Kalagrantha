import React from 'react';
import { useNav } from '../../../context/NavContext';
import EventsNavbar from './EventsNavbar';
import EventsHeroSwiper from './EventsHeroSwiper';
import DynamicGallery from '../../../components/sections/DynamicGallery';
import '../VerticalPage.scss';
import './EventsHeroSwiper.scss';

const Events = () => {
    const { activeVertical } = useNav();
    if (!activeVertical) return null;

    return (
        <div className="vertical-page events-page">
            <EventsNavbar />
            <EventsHeroSwiper />

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

            <section className="gallery-section section">
                <div className="container">
                    <h2 className="section-title">Gallery</h2>
                    <DynamicGallery vertical="events" />
                </div>
            </section>
        </div>
    );
};

export default Events;
