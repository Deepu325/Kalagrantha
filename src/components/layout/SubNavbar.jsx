import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNav } from '../../context/NavContext';
import { VERTICALS } from '../../constants/verticals';
import './SubNavbar.scss';

const SubNavbar = () => {
    const { activeVertical } = useNav();
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
        <nav className="sub-nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/home" className="logo">
                        <span className="logo-text">KALA</span>
                        <span className="logo-sub">ECOSYSTEM</span>
                    </Link>
                </div>

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
                            {!activeVertical && <li><NavLink to="/home">Home</NavLink></li>}

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

                            {!activeVertical && (
                                <>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/calendar">Calendar</NavLink></li>
                                    <li><NavLink to="/collaborate">Collaborate</NavLink></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="nav-right">
                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
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
                            <Link to="/home" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
                            
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

export default SubNavbar;