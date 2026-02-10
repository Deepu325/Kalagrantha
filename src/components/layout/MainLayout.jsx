import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavProvider } from '../../context/NavContext';

const MainLayout = () => {
    const scrollRef = useRef(null);

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

    return (
        <NavProvider>
            <div className="app-wrapper">
                <Navbar />
                <main className="content-wrapper">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </NavProvider>
    );
};

export default MainLayout;
