import React from 'react';
import EventsNavbar from './EventsNavbar';
import './EventsSubPages.scss';

const EventsArtists = () => {
    const artists = [
        {
            name: "Priya Sharma",
            specialty: "Classical Dance",
            experience: "15+ years",
            image: "https://picsum.photos/300/300?random=11",
            bio: "Renowned Bharatanatyam dancer and choreographer with international acclaim.",
            achievements: ["Padma Shri Recipient", "50+ International Performances", "Cultural Ambassador"]
        },
        {
            name: "Arjun Mehta",
            specialty: "Contemporary Music",
            experience: "12+ years",
            image: "https://picsum.photos/300/300?random=12",
            bio: "Fusion musician blending traditional Indian instruments with modern compositions.",
            achievements: ["Grammy Nominated", "100+ Concerts", "Music Director"]
        },
        {
            name: "Kavya Nair",
            specialty: "Theater & Drama",
            experience: "18+ years",
            image: "https://picsum.photos/300/300?random=13",
            bio: "Award-winning theater director and actress specializing in contemporary Indian drama.",
            achievements: ["National Award Winner", "200+ Productions", "Theater Festival Director"]
        },
        {
            name: "Ravi Kumar",
            specialty: "Visual Arts",
            experience: "20+ years",
            image: "https://picsum.photos/300/300?random=14",
            bio: "Contemporary artist known for large-scale installations and digital art experiences.",
            achievements: ["International Exhibitions", "Art Residencies", "Museum Collections"]
        },
        {
            name: "Meera Joshi",
            specialty: "Folk Music",
            experience: "25+ years",
            image: "https://picsum.photos/300/300?random=15",
            bio: "Master of traditional folk music from Rajasthan, preserving ancient musical traditions.",
            achievements: ["UNESCO Recognition", "Cultural Heritage Award", "Master Teacher"]
        },
        {
            name: "Vikram Singh",
            specialty: "Martial Arts",
            experience: "16+ years",
            image: "https://picsum.photos/300/300?random=16",
            bio: "Kalaripayattu master and choreographer for action sequences in films and events.",
            achievements: ["World Champion", "Film Choreographer", "International Instructor"]
        }
    ];

    return (
        <div className="events-page">
            <EventsNavbar />
            <section className="page-hero">
                <div className="container">
                    <h1>Our Artists</h1>
                    <p>Meet the talented professionals who bring our events to life</p>
                </div>
            </section>

            <section className="artists-section section">
                <div className="container">
                    <div className="artists-grid">
                        {artists.map((artist, index) => (
                            <div key={index} className="artist-card">
                                <div className="artist-image">
                                    <img src={artist.image} alt={artist.name} />
                                    <div className="artist-overlay">
                                        <span className="artist-specialty">{artist.specialty}</span>
                                    </div>
                                </div>
                                <div className="artist-info">
                                    <h3>{artist.name}</h3>
                                    <p className="artist-experience">{artist.experience} Experience</p>
                                    <p className="artist-bio">{artist.bio}</p>
                                    <div className="artist-achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                            {artist.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="artist-btn">Book Artist</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsArtists;