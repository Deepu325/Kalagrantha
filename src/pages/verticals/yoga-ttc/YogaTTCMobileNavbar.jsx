import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './YogaTTCPages.scss';

const menuLinks = [
  { label: 'Home', path: '/yoga-ttc' },
  { label: 'Program', path: '/yoga-ttc/program' },
  { label: 'Certification', path: '/yoga-ttc/certification' },
  { label: 'Faculty', path: '/yoga-ttc/faculty' },
  { label: 'Eligibility', path: '/yoga-ttc/eligibility' },
  { label: 'Register', path: '/yoga-ttc/register' },
];

const YogaTTCMobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="yttc-mobile-navbar-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
        <span className="menu-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      {open && (
        <div className="yttc-mobile-navbar-overlay" onClick={() => setOpen(false)}>
          <nav className="yttc-mobile-navbar" onClick={e => e.stopPropagation()}>
            <ul>
              {menuLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} onClick={() => setOpen(false)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default YogaTTCMobileNavbar;
