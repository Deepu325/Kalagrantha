import React from 'react';
import EventsNavbar from './EventsNavbar';
import './EventsSubPages.scss';

const EventsPastEvents = () => {
    const pastEvents = [
        {
            title: "Tech Summit 2024",
            client: "Global Tech Corp",
            date: "March 2024",
            location: "Mumbai Convention Center",
            attendees: "2,500+",
            image: "https://picsum.photos/400/250?random=1",
            description: "A three-day technology conference featuring keynotes, workshops, and networking sessions."
        },
        {
            title: "Heritage Arts Festival",
            client: "Ministry of Culture",
            date: "February 2024",
            location: "Red Fort, Delhi",
            attendees: "10,000+",
            image: "https://picsum.photos/400/250?random=2",
            description: "Celebrating India's rich cultural heritage through traditional and contemporary performances."
        },
        {
            title: "Luxury Brand Launch",
            client: "Premium Fashion House",
            date: "January 2024",
            location: "The Taj Palace, Mumbai",
            attendees: "300+",
            image: "https://picsum.photos/400/250?random=3",
            description: "An exclusive product launch event with fashion shows and celebrity appearances."
        },
        {
            title: "International Film Festival",
            client: "Cinema Foundation",
            date: "December 2023",
            location: "Goa",
            attendees: "5,000+",
            image: "https://picsum.photos/400/250?random=4",
            description: "A week-long celebration of cinema with screenings, panels, and award ceremonies."
        },
        {
            title: "Corporate Annual Gala",
            client: "Fortune 500 Company",
            date: "November 2023",
            location: "Bangalore",
            attendees: "1,200+",
            image: "https://picsum.photos/400/250?random=5",
            description: "Annual company celebration with awards, entertainment, and team building activities."
        },
        {
            title: "Music & Arts Confluence",
            client: "Arts Council",
            date: "October 2023",
            location: "Jaipur",
            attendees: "8,000+",
            image: "https://picsum.photos/400/250?random=6",
            description: "Multi-genre music festival showcasing classical, folk, and contemporary artists."
        }
    ];

    return (
        <div className="events-page">
            <EventsNavbar />
            <section className="page-hero">
                <div className="container">
                    <h1>Past Events</h1>
                    <p>A showcase of our successful event productions</p>
                </div>
            </section>

            <section className="past-events-section section">
                <div className="container">
                    <div className="events-grid">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="event-card">
                                <div className="event-image">
                                    <img src={event.image} alt={event.title} />
                                    <div className="event-overlay">
                                        <span className="event-date">{event.date}</span>
                                    </div>
                                </div>
                                <div className="event-info">
                                    <h3>{event.title}</h3>
                                    <p className="event-client">Client: {event.client}</p>
                                    <p className="event-description">{event.description}</p>
                                    <div className="event-details">
                                        <span className="event-location">📍 {event.location}</span>
                                        <span className="event-attendees">👥 {event.attendees}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPastEvents;