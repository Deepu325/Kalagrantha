import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VERTICALS } from '../../constants/verticals';
import './MainNavbar.scss';

const MainNavbar = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVerticalsExpanded, setIsVerticalsExpanded] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

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
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="logo">
                        <span className="logo-text">KALA</span>
                        <span className="logo-sub">ECOSYSTEM</span>
                    </Link>
                </div>

                <div className="nav-center">
                    <ul className="nav-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        
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

                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/calendar">Calendar</NavLink></li>
                        <li><NavLink to="/collaborate">Collaborate</NavLink></li>
                    </ul>
                </div>

                <div className="nav-right">
                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link to="/contact" className="cta-button">Contact</Link>
                    <Link to="/admin/login" className="admin-logo-nav">
                        <div className="logo-emblem">KA</div>
                    </Link>
                </div>

                <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <nav className="mobile-nav">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
                            
                            <div className="mobile-verticals">
                                <button 
                                    className={`verticals-toggle ${isVerticalsExpanded ? 'expanded' : ''}`}
                                    onClick={() => setIsVerticalsExpanded(!isVerticalsExpanded)}
                                >
                                    VERTICALS
                                </button>
                                <div className={`verticals-dropdown ${isVerticalsExpanded ? 'expanded' : ''}`}>
                                    {VERTICALS.map(v => (
                                        <Link 
                                            key={v.id} 
                                            to={v.path} 
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {v.shortName}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
                            <Link to="/calendar" onClick={() => setIsMobileMenuOpen(false)}>CALENDAR</Link>
                            <Link to="/collaborate" onClick={() => setIsMobileMenuOpen(false)}>COLLABORATE</Link>
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;