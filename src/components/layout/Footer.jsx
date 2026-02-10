import React from 'react';
import { Link } from 'react-router-dom';
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
                            <li><Link to="/art-hub">Art & Movement</Link></li>
                            <li><Link to="/movement-epics">Movement & Epics</Link></li>
                            <li><Link to="/yoga-ttc">Yoga TTC</Link></li>
                            <li><Link to="/creative-hub">Creative Hub</Link></li>
                            <li><Link to="/events-entertainment">Events</Link></li>
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
