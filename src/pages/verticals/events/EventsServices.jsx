import React from 'react';
import EventsNavbar from './EventsNavbar';
import './EventsSubPages.scss';

const EventsServices = () => {
    const services = [
        {
            title: "Corporate Events",
            description: "Executive conferences, product launches, and corporate galas with premium production values.",
            features: ["Custom staging", "A/V production", "Artist curation", "Brand integration"],
            price: "Starting from ₹5,00,000"
        },
        {
            title: "Cultural Festivals",
            description: "Large-scale cultural celebrations showcasing traditional and contemporary arts.",
            features: ["Multi-stage setup", "Artist coordination", "Cultural programming", "Audience management"],
            price: "Starting from ₹15,00,000"
        },
        {
            title: "Private Events",
            description: "Intimate gatherings, weddings, and milestone celebrations with personalized touch.",
            features: ["Venue styling", "Entertainment curation", "Catering coordination", "Photography"],
            price: "Starting from ₹2,00,000"
        },
        {
            title: "Brand Activations",
            description: "Immersive brand experiences that create memorable connections with your audience.",
            features: ["Concept development", "Interactive installations", "Social media integration", "ROI tracking"],
            price: "Starting from ₹8,00,000"
        },
        {
            title: "Film & Media Events",
            description: "Premieres, award ceremonies, and media launches with red carpet experiences.",
            features: ["Red carpet setup", "Media management", "Celebrity coordination", "Live streaming"],
            price: "Starting from ₹12,00,000"
        },
        {
            title: "Educational Workshops",
            description: "Interactive learning experiences combining arts, culture, and professional development.",
            features: ["Expert facilitators", "Hands-on activities", "Resource materials", "Certification"],
            price: "Starting from ₹50,000"
        }
    ];

    return (
        <div className="events-page">
            <EventsNavbar />
            <section className="page-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive event solutions tailored to your vision</p>
                </div>
            </section>

            <section className="services-section section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <h3>{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="service-price">{service.price}</div>
                                <button className="service-btn">Get Quote</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsServices;