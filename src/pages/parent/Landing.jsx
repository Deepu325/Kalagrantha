import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Landing.scss';

const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.from('.landing-logo', {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        })
        .from('.landing-text', {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
        }, '-=0.4')
        .from('.landing-divider', {
            scaleX: 0,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
        }, '-=0.6')
        .to('.landing-page', {
            opacity: 0,
            duration: 0.5,
            delay: 0.8,
            onComplete: () => navigate('/home')
        });
    }, [navigate]);

    return (
        <div className="landing-page">
            <div className="landing-content">
                <div className="landing-divider top"></div>
                <h1 className="landing-logo">
                    <span className="kala">KALA</span>
                    <span className="grantha">GRANTHA</span>
                </h1>
                <div className="landing-divider"></div>
                <p className="landing-text">Arts · Movement · Education</p>
            </div>
        </div>
    );
};

export default Landing;
