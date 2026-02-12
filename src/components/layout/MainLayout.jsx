import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';
import SubNavbar from './SubNavbar';
import MovementEpicsNavbar from './MovementEpicsNavbar';
import CreativeHubNavbar from '../../pages/verticals/creative-hub/CreativeHubNavbar';
import Footer from './Footer';
import { NavProvider } from '../../context/NavContext';

const MainLayout = () => {
    const scrollRef = useRef(null);
    const location = useLocation();
    const isMainPage = location.pathname === '/home';
    const isCreativeHubPage = location.pathname.startsWith('/creative-hub');
    const isMovementEpicsPage = location.pathname.startsWith('/movement-epics');
    const isVerticalPage = location.pathname.startsWith('/art-hub') || 
                          location.pathname.startsWith('/yoga-ttc') || 
                          location.pathname.startsWith('/creative-hub') || 
                          location.pathname.startsWith('/events-entertainment');

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const getNavbar = () => {
        if (isMainPage) return <MainNavbar />;
        if (isCreativeHubPage) return <CreativeHubNavbar />;
        if (isMovementEpicsPage) return <MovementEpicsNavbar />;
        if (isVerticalPage) return <Navbar />;
        return <SubNavbar />;
    };

    return (
        <NavProvider>
            <div className="app-wrapper">
                {getNavbar()}
                <main className="content-wrapper">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </NavProvider>
    );
};

export default MainLayout;
