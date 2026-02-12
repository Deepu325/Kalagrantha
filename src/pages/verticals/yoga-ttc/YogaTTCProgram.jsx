import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DynamicGallery from '../../../components/sections/DynamicGallery';
import YogaTTCMobileNavbar from './YogaTTCMobileNavbar';
import './YogaTTCPages.scss';

gsap.registerPlugin(ScrollTrigger);

const YogaTTCProgram = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-content > *', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="yoga-ttc-subpage" ref={pageRef}>
            <YogaTTCMobileNavbar />
            <header className="subpage-hero">
                <div className="hero-bg"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1>Program Overview</h1>
                        <p>Comprehensive 200/500 Hour Yoga Teacher Training Programs</p>
                    </div>
                </div>
            </header>

            <section className="program-details section">
                <div className="container">
                    <div className="program-grid">
                        <div className="program-card ryt-200">
                            <div className="program-header">
                                <h2>200-Hour RYT Program</h2>
                                <span className="duration">4 Weeks Intensive</span>
                            </div>
                            <div className="program-content">
                                <h3>Foundation Training</h3>
                                <ul>
                                    <li>Asana Practice & Alignment (75 hours)</li>
                                    <li>Pranayama & Meditation (20 hours)</li>
                                    <li>Yoga Philosophy & Ethics (30 hours)</li>
                                    <li>Anatomy & Physiology (20 hours)</li>
                                    <li>Teaching Methodology (25 hours)</li>
                                    <li>Practicum & Assessment (30 hours)</li>
                                </ul>
                                <div className="program-price">
                                    <span className="price">₹85,000</span>
                                    <span className="note">Early Bird: ₹75,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="program-card ryt-500">
                            <div className="program-header">
                                <h2>500-Hour RYT Program</h2>
                                <span className="duration">8 Weeks Intensive</span>
                            </div>
                            <div className="program-content">
                                <h3>Advanced Training</h3>
                                <ul>
                                    <li>Advanced Asana & Sequencing (100 hours)</li>
                                    <li>Advanced Pranayama & Meditation (40 hours)</li>
                                    <li>Yoga Philosophy & Sanskrit (60 hours)</li>
                                    <li>Advanced Anatomy & Therapeutics (50 hours)</li>
                                    <li>Teaching Skills & Business (75 hours)</li>
                                    <li>Specializations & Electives (100 hours)</li>
                                    <li>Practicum & Mentorship (75 hours)</li>
                                </ul>
                                <div className="program-price">
                                    <span className="price">₹1,65,000</span>
                                    <span className="note">Early Bird: ₹1,45,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery-section section">
                <div className="container">
                    <h2 className="section-title">Training Gallery</h2>
                    <DynamicGallery vertical="yoga-ttc" subsection="program" />
                </div>
            </section>
        </div>
    );
};

export default YogaTTCProgram;