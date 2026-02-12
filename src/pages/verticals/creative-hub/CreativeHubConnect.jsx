import React from 'react';
import { Link } from 'react-router-dom';
import './CreativeHubSubPages.scss';

const CreativeHubConnect = () => {
    return (
        <div className="creative-hub-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Connect With Us</h1>
                    <p>Join our creative community and start your artistic journey</p>
                </div>
            </section>

            <section className="connect-section section">
                <div className="container">
                    <div className="connect-grid">
                        <div className="connect-card">
                            <h3>Apply for Residency</h3>
                            <p>Submit your portfolio and project proposal for our artist residency program.</p>
                            <Link to="/contact" className="connect-btn">Apply Now</Link>
                        </div>

                        <div className="connect-card">
                            <h3>Book Studio Space</h3>
                            <p>Rent our professional studios for your creative projects and workshops.</p>
                            <Link to="/contact" className="connect-btn">Book Space</Link>
                        </div>

                        <div className="connect-card">
                            <h3>Collaborate</h3>
                            <p>Partner with us on innovative projects that blend art, technology, and culture.</p>
                            <Link to="/contact" className="connect-btn">Partner Up</Link>
                        </div>

                        <div className="connect-card">
                            <h3>Visit Gallery</h3>
                            <p>Schedule a visit to our gallery and meet our resident artists.</p>
                            <Link to="/contact" className="connect-btn">Schedule Visit</Link>
                        </div>
                    </div>

                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <div className="contact-details">
                            <div className="contact-item">
                                <strong>Email:</strong> creative@kalagrantha.com
                            </div>
                            <div className="contact-item">
                                <strong>Phone:</strong> +91 98765 43210
                            </div>
                            <div className="contact-item">
                                <strong>Address:</strong> Creative Hub, Kalagrantha Campus, Arts District
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeHubConnect;