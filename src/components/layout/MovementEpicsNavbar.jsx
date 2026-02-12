import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNav } from '../../context/NavContext';
import { VERTICALS } from '../../constants/verticals';
import './MovementEpicsNavbar.scss';

const MovementEpicsNavbar = () => {
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
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="movement-epics-nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/home" className="logo">
                        <span className="logo-text">KALA</span>
                        <span className="logo-sub">ECOSYSTEM</span>
                    </Link>
                </div>

                {/* Desktop nav-center and nav-right */}
                <div className="nav-center desktop-only">
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

                <div className="nav-right desktop-only">
                    <Link to="/contact" className="cta-button">Contact</Link>
                    <Link to="/admin/login" className="admin-logo-nav">
                        <div className="logo-emblem">KA</div>
                    </Link>
                </div>

                {/* Mobile hamburger toggle */}
                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile overlay menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-overlay" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>
                        <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                            <nav className="mobile-nav scrollable-menu">
                                <Link to="/movement-epics" className="mobile-link internal" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Home</Link>
                                <Link to="/movement-epics/curriculum" className="mobile-link internal" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Curriculum</Link>
                                <Link to="/movement-epics/philosophy" className="mobile-link internal" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Philosophy</Link>
                                <Link to="/movement-epics/modules" className="mobile-link internal" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Modules</Link>
                                <Link to="/movement-epics/institutions" className="mobile-link internal" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Institutions</Link>
                                <Link to="/movement-epics/apply" className="mobile-link internal" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Apply</Link>

                                <div className="mobile-verticals">
                                    <button 
                                        className={`verticals-toggle${isVerticalsExpanded ? ' expanded' : ''}`}
                                        onClick={() => setIsVerticalsExpanded(v => !v)}
                                        type="button"
                                    >
                                        VERTICALS
                                        <span className="verticals-icon">{isVerticalsExpanded ? '−' : '+'}</span>
                                    </button>
                                    <div className={`verticals-dropdown${isVerticalsExpanded ? ' expanded' : ''}`}>
                                        {VERTICALS.filter(v => !activeVertical || v.id !== activeVertical.id).map(v => (
                                            <Link 
                                                key={v.id} 
                                                to={v.path} 
                                                onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}
                                            >
                                                {v.shortName}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/contact" className="mobile-link eco" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Contact</Link>
                                <Link to="/admin/login" className="mobile-link eco" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>KA</Link>
                                <Link to="/home" className="mobile-link eco" onClick={() => { setIsMobileMenuOpen(false); setIsVerticalsExpanded(false); }}>Back to Ecosystem</Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MovementEpicsNavbar;