import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNav } from '../../context/NavContext';
import { VERTICALS } from '../../constants/verticals';
import './Navbar.scss';

const Navbar = () => {
    const { activeVertical } = useNav();
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVerticalsExpanded, setIsVerticalsExpanded] = useState(false);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    // Disable scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className={`global-nav ${isMegaMenuOpen ? 'mega-menu-open' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="logo">
                        <span className="logo-text">KALA</span>
                        <span className="logo-sub">ECOSYSTEM</span>
                    </Link>
                </div>

                {/* Regular Navbar if no active vertical or on hover/menu trigger */}
                <div className="nav-center">
                    <div className="nav-wrapper">
                        {activeVertical && (
                            <div className="vertical-nav-container">
                                <Link to={activeVertical.path} className="vertical-title">{activeVertical.shortName}</Link>
                                <ul className="vertical-links">
                                    {activeVertical.nav.map(item => (
                                        <li key={item.path}>
                                            <NavLink to={`${activeVertical.path}/${item.path}`}>{item.label}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <ul className={`nav-links ${activeVertical ? 'vertical-active' : ''}`}>
                            {!activeVertical && <li><NavLink to="/">Home</NavLink></li>}
                            <li
                                onMouseEnter={() => setIsMegaMenuOpen(true)}
                                onMouseLeave={() => setIsMegaMenuOpen(false)}
                                className="has-mega-menu"
                            >
                                <span className="mega-trigger">Verticals</span>
                                <div className="mega-menu">
                                    <div className="mega-menu-grid">
                                        {VERTICALS.map(v => (
                                            <Link key={v.id} to={v.path} className="mega-item">
                                                <h3>{v.shortName}</h3>
                                                <p>{v.name}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-right">
                    <Link to="/contact" className="contact-btn">Contact</Link>
                    <Link to="/admin/login" className="admin-logo-link">
                        <div className="admin-logo">KA</div>
                    </Link>
                </div>
                {/* Mobile Hamburger Toggle (Art Hub only) */}
                {activeVertical && activeVertical.id === 'art-hub' && (
                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}
                {/* Mobile Overlay Menu (Art Hub only) */}
                {activeVertical && activeVertical.id === 'art-hub' && (
                    <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                            <nav className="mobile-nav">
                                <Link to="/art-hub/overview" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
                                <Link to="/art-hub/classes" onClick={() => setIsMobileMenuOpen(false)}>Classes</Link>
                                <Link to="/art-hub/faculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</Link>
                                <Link to="/art-hub/timetable" onClick={() => setIsMobileMenuOpen(false)}>Timetable</Link>
                                <Link to="/art-hub/enroll" onClick={() => setIsMobileMenuOpen(false)}>Enroll</Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;