import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VERTICALS } from '../../constants/verticals';
import './MainNavbar.scss';

const MainNavbar = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

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
                    <Link to="/contact" className="cta-button">Contact</Link>
                    <Link to="/admin/login" className="admin-logo-nav">
                        <div className="logo-emblem">KA</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;