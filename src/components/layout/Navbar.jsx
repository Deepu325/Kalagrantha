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
                closeMobileMenu();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    // Helpers to open/close mobile menu and avoid layout shift
    const openMobileMenu = () => {
        // reserve scrollbar width to avoid page jump
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarWidth > 0) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        document.body.classList.add('no-scroll');
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('no-scroll');
        document.body.style.paddingRight = '';
    };

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
                    {activeVertical && activeVertical.id === 'art-hub' && (
                        <>
                            <Link to="/contact" className="contact-btn">Contact</Link>
                            <Link to="/admin/login" className="admin-logo-link">
                                <div className="admin-logo">KA</div>
                            </Link>
                        </>
                    )}
                </div>
                {/* Mobile Hamburger Toggle (Yoga TTC only) */}
                {activeVertical && activeVertical.id === 'yoga-ttc' && (
                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => (isMobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
                        aria-expanded={isMobileMenuOpen}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}
                {/* Mobile Overlay Menu (Art Hub only) */}
                {activeVertical && activeVertical.id === 'art-hub' && (
                    <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => closeMobileMenu()} role="dialog" aria-hidden={!isMobileMenuOpen}>
                        <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                            <nav className="mobile-nav">
                                <Link to="/art-hub/overview" onClick={() => closeMobileMenu()}>Overview</Link>
                                <Link to="/art-hub/classes" onClick={() => closeMobileMenu()}>Classes</Link>
                                <Link to="/art-hub/faculty" onClick={() => closeMobileMenu()}>Faculty</Link>
                                <Link to="/art-hub/timetable" onClick={() => closeMobileMenu()}>Timetable</Link>
                                <Link to="/art-hub/enroll" onClick={() => closeMobileMenu()}>Enroll</Link>

                                <div className="mobile-divider" aria-hidden="true" />

                                <Link to="/admin/login" className="mobile-secondary" onClick={() => closeMobileMenu()}>Admin</Link>
                                <Link to="/contact" className="mobile-secondary" onClick={() => closeMobileMenu()}>Contact</Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;