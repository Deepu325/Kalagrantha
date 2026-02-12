import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './YogaTTCPages.scss';

const menuLinks = [
  { label: 'Home', path: '/' },
  { label: 'Program', path: '/yoga-ttc/program' },
  { label: 'Certification', path: '/yoga-ttc/certification' },
  { label: 'Faculty', path: '/yoga-ttc/faculty' },
  { label: 'Eligibility', path: '/yoga-ttc/eligibility' },
  { label: 'Register', path: '/yoga-ttc/register' },
  { label: 'Verticals', path: '/verticals', isVerticals: true },
  { label: 'Back to Ecosystem', path: '/' }
];

const YogaTTCMobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [verticalsOpen, setVerticalsOpen] = useState(false);

  return (
    <>
      <button className="yttc-mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
        <span className="menu-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      {open && (
        <div className="yttc-mobile-menu-overlay" onClick={() => setOpen(false)}>
          <nav className="yttc-mobile-menu" onClick={e => e.stopPropagation()}>
            <ul>
              {menuLinks.map(link =>
                link.isVerticals ? (
                  <li key={link.label}>
                    <button
                      className="verticals-toggle"
                      onClick={() => setVerticalsOpen(!verticalsOpen)}
                    >
                      {link.label} <span className="toggle-icon">{verticalsOpen ? '−' : '+'}</span>
                    </button>
                    {verticalsOpen && (
                      <ul className="verticals-dropdown">
                        <li><Link to="/art-hub" onClick={() => setOpen(false)}>Art Hub</Link></li>
                        <li><Link to="/movement-epics" onClick={() => setOpen(false)}>Movement Epics</Link></li>
                        <li><Link to="/creative-hub" onClick={() => setOpen(false)}>Creative Hub</Link></li>
                        <li><Link to="/yoga-ttc" onClick={() => setOpen(false)}>Yoga TTC</Link></li>
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link to={link.path} onClick={() => setOpen(false)}>{link.label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default YogaTTCMobileMenu;
