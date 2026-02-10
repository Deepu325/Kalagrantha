import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNav } from '../../context/NavContext';
import { VERTICALS } from '../../constants/verticals';
import './Navbar.scss';

const Navbar = () => {
    const { activeVertical } = useNav();
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <nav className={`global-nav ${isMegaMenuOpen ? 'mega-menu-open' : ''}`}>
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
                                <span className="vertical-title">{activeVertical.shortName}</span>
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
                    <Link to="/contact" className="cta-button">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
