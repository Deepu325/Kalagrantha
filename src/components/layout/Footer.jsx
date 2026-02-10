import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="global-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2>KALA</h2>
                        <p>A culturally rooted yet globally positioned arts, movement, and education ecosystem.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Ecosystem</h4>
                        <ul>
                            <li>Art & Movement</li>
                            <li>Movement & Epics</li>
                            <li>Yoga TTC</li>
                            <li>Creative Hub</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>info@imagostudio.com</p>
                        <p>+91 98765 43210</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Kala Arts & Movement Ecosystem. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
