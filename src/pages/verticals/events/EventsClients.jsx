import React from 'react';
import EventsNavbar from './EventsNavbar';
import './EventsSubPages.scss';

const EventsClients = () => {
    const clients = [
        {
            name: "Tech Innovations Ltd",
            category: "Technology",
            projects: "15+ Events",
            testimonial: "Kalagrantha transformed our annual conference into an unforgettable experience. Their attention to detail and creative vision exceeded our expectations.",
            logo: "https://picsum.photos/200/100?random=21"
        },
        {
            name: "Heritage Hotels Group",
            category: "Hospitality",
            projects: "25+ Events",
            testimonial: "Working with Kalagrantha has been exceptional. They understand luxury and deliver experiences that perfectly align with our brand values.",
            logo: "https://picsum.photos/200/100?random=22"
        },
        {
            name: "Global Fashion House",
            category: "Fashion & Luxury",
            projects: "12+ Events",
            testimonial: "Their artistic vision and flawless execution made our product launches truly spectacular. Highly recommended for premium brand events.",
            logo: "https://picsum.photos/200/100?random=23"
        },
        {
            name: "Ministry of Culture",
            category: "Government",
            projects: "30+ Events",
            testimonial: "Kalagrantha's deep understanding of Indian culture and modern presentation techniques makes them our preferred partner for cultural events.",
            logo: "https://picsum.photos/200/100?random=24"
        },
        {
            name: "International Film Festival",
            category: "Entertainment",
            projects: "8+ Events",
            testimonial: "Their production quality and artist management capabilities are world-class. They've elevated our festival to international standards.",
            logo: "https://picsum.photos/200/100?random=25"
        },
        {
            name: "Fortune 500 Corp",
            category: "Corporate",
            projects: "20+ Events",
            testimonial: "Professional, reliable, and creative. Kalagrantha has been our trusted partner for all major corporate celebrations and launches.",
            logo: "https://picsum.photos/200/100?random=26"
        }
    ];

    const clientCategories = [
        { name: "Corporate", count: "150+", icon: "🏢" },
        { name: "Government", count: "45+", icon: "🏛️" },
        { name: "Entertainment", count: "80+", icon: "🎬" },
        { name: "Hospitality", count: "60+", icon: "🏨" },
        { name: "Fashion", count: "35+", icon: "👗" },
        { name: "Technology", count: "90+", icon: "💻" }
    ];

    return (
        <div className="events-page">
            <EventsNavbar />
            <section className="page-hero">
                <div className="container">
                    <h1>Our Clients</h1>
                    <p>Trusted by leading brands and organizations worldwide</p>
                </div>
            </section>

            <section className="client-categories-section section">
                <div className="container">
                    <h2 className="section-title">Client Categories</h2>
                    <div className="categories-grid">
                        {clientCategories.map((category, index) => (
                            <div key={index} className="category-card">
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.name}</h3>
                                <span className="category-count">{category.count} Clients</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="clients-section section">
                <div className="container">
                    <h2 className="section-title">Client Testimonials</h2>
                    <div className="clients-grid">
                        {clients.map((client, index) => (
                            <div key={index} className="client-card">
                                <div className="client-header">
                                    <img src={client.logo} alt={client.name} className="client-logo" />
                                    <div className="client-info">
                                        <h3>{client.name}</h3>
                                        <span className="client-category">{client.category}</span>
                                        <span className="client-projects">{client.projects}</span>
                                    </div>
                                </div>
                                <blockquote className="client-testimonial">
                                    "{client.testimonial}"
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsClients;