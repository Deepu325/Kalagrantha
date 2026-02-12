import React, { useState, useEffect } from 'react';
import './CreativeHubSubPages.scss';

const CreativeHubGallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        // Load gallery items from localStorage
        const saved = localStorage.getItem('creativeHubGallery');
        if (saved) {
            setGalleryItems(JSON.parse(saved));
        } else {
            // Default items
            const defaultItems = [
                {
                    id: 1,
                    title: "Digital Metamorphosis",
                    artist: "Sarah Chen",
                    medium: "Interactive Installation",
                    type: "image",
                    src: "https://picsum.photos/400/300?random=1"
                },
                {
                    id: 2,
                    title: "Echoes of Heritage",
                    artist: "Rajesh Kumar",
                    medium: "Mixed Media",
                    type: "image",
                    src: "https://picsum.photos/400/300?random=2"
                },
                {
                    id: 3,
                    title: "Urban Rhythms",
                    artist: "Maria Santos",
                    medium: "Video Art",
                    type: "video",
                    src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                },
                {
                    id: 4,
                    title: "Sustainable Futures",
                    artist: "Alex Thompson",
                    medium: "Sculpture",
                    type: "image",
                    src: "https://picsum.photos/400/300?random=3"
                }
            ];
            setGalleryItems(defaultItems);
            localStorage.setItem('creativeHubGallery', JSON.stringify(defaultItems));
        }
    }, []);

    return (
        <div className="creative-hub-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Creative Gallery</h1>
                    <p>Showcasing innovative works from our resident artists</p>
                </div>
            </section>

            <section className="gallery-section section">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryItems.map(item => (
                            <div key={item.id} className="gallery-item">
                                <div className="artwork-image">
                                    {item.type === 'video' ? (
                                        <video 
                                            controls 
                                            className="artwork-media"
                                            poster="https://picsum.photos/400/300?random=video"
                                        >
                                            <source src={item.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img 
                                            src={item.src} 
                                            alt={item.title}
                                            className="artwork-media"
                                            onError={(e) => {
                                                e.target.src = `https://picsum.photos/400/300?random=${item.id}`;
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="artwork-info">
                                    <h3>"{item.title}"</h3>
                                    <p className="artist">by {item.artist}</p>
                                    <p className="medium">{item.medium}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="exhibition-info">
                        <h2>Current Exhibition</h2>
                        <h3>"Boundaries Dissolved"</h3>
                        <p>A collective showcase exploring the intersection of traditional and digital art forms.</p>
                        <div className="exhibition-details">
                            <span>Duration: March 15 - April 30, 2024</span>
                            <span>Opening Hours: 10 AM - 8 PM</span>
                            <span>Free Entry</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeHubGallery;