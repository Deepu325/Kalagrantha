import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Calendar.scss';

gsap.registerPlugin(ScrollTrigger);

const Calendar = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animations - medium effects
            gsap.from('.calendar-hero h1', { 
                y: 40, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power2.out', 
                clearProps: 'all' 
            });
            gsap.from('.calendar-hero .lead', { 
                y: 30, 
                opacity: 0, 
                duration: 0.6, 
                delay: 0.2, 
                ease: 'power2.out', 
                clearProps: 'all' 
            });

            // Calendar items animations - medium effects
            gsap.from('.calendar-item', { 
                y: 50, 
                opacity: 0, 
                duration: 0.7, 
                delay: 0.3, 
                stagger: 0.1, 
                ease: 'power2.out', 
                scrollTrigger: { trigger: '.calendar-grid', start: 'top 80%' }, 
                clearProps: 'all' 
            });
            gsap.from('.date-badge', { 
                scale: 0.8, 
                opacity: 0, 
                duration: 0.5, 
                delay: 0.6, 
                stagger: 0.08, 
                ease: 'back.out(1.2)', 
                scrollTrigger: { trigger: '.calendar-grid', start: 'top 80%' }, 
                clearProps: 'all' 
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="calendar-page" ref={pageRef}>
            <section className="calendar-hero">
                <div className="container">
                    <h1>Events & Programs</h1>
                    <p className="lead">Discover upcoming workshops, performances, and cultural celebrations</p>
                </div>
            </section>

            <section className="calendar-content section">
                <div className="container">
                    <div className="calendar-grid">
                        <div className="calendar-item featured">
                            <div className="date-badge">
                                <span className="day">15</span>
                                <span className="month">Dec</span>
                            </div>
                            <div className="event-info">
                                <h3>Classical Dance Workshop</h3>
                                <p>Bharatanatyam fundamentals for beginners - Learn the ancient art form with our expert instructors</p>
                                <span className="time">10:00 AM - 2:00 PM</span>
                                <div className="event-meta">
                                    <span className="location">📍 Art Hub Studio</span>
                                    <span className="price">₹2,500</span>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-item">
                            <div className="date-badge">
                                <span className="day">18</span>
                                <span className="month">Dec</span>
                            </div>
                            <div className="event-info">
                                <h3>Yoga Teacher Training</h3>
                                <p>200-hour certification program begins - Transform your practice into a teaching journey</p>
                                <span className="time">6:00 AM - 8:00 AM</span>
                                <div className="event-meta">
                                    <span className="location">📍 Yoga TTC Center</span>
                                    <span className="price">₹45,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-item">
                            <div className="date-badge">
                                <span className="day">22</span>
                                <span className="month">Dec</span>
                            </div>
                            <div className="event-info">
                                <h3>Movement & Epics Showcase</h3>
                                <p>Student performance and cultural evening - Witness the power of storytelling through movement</p>
                                <span className="time">7:00 PM - 9:00 PM</span>
                                <div className="event-meta">
                                    <span className="location">📍 Main Auditorium</span>
                                    <span className="price">Free Entry</span>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-item">
                            <div className="date-badge">
                                <span className="day">28</span>
                                <span className="month">Dec</span>
                            </div>
                            <div className="event-info">
                                <h3>Creative Hub Open Day</h3>
                                <p>Explore our creative workshops and meet the artists - Discover your artistic potential</p>
                                <span className="time">11:00 AM - 4:00 PM</span>
                                <div className="event-meta">
                                    <span className="location">📍 Creative Hub</span>
                                    <span className="price">Free Entry</span>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-item">
                            <div className="date-badge">
                                <span className="day">05</span>
                                <span className="month">Jan</span>
                            </div>
                            <div className="event-info">
                                <h3>New Year Wellness Retreat</h3>
                                <p>Start your year with mindfulness and movement - A holistic approach to well-being</p>
                                <span className="time">9:00 AM - 5:00 PM</span>
                                <div className="event-meta">
                                    <span className="location">📍 Wellness Center</span>
                                    <span className="price">₹3,500</span>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-item">
                            <div className="date-badge">
                                <span className="day">12</span>
                                <span className="month">Jan</span>
                            </div>
                            <div className="event-info">
                                <h3>Cultural Exchange Program</h3>
                                <p>International artists collaboration - Experience diverse cultural expressions and techniques</p>
                                <span className="time">2:00 PM - 6:00 PM</span>
                                <div className="event-meta">
                                    <span className="location">📍 Main Campus</span>
                                    <span className="price">₹1,800</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calendar;