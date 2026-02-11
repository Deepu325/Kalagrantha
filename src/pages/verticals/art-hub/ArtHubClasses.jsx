import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './ArtHubPages.scss';

const ArtHubClasses = () => {
    const pageRef = useRef(null);
    const [expandedClass, setExpandedClass] = useState(null);

    const classesData = [
        {
            id: 'bharatanatyam',
            title: 'Bharatanatyam',
            subtitle: 'Classical South Indian Dance',
            levels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
            duration: '90 minutes',
            price: '₹3,500/month',
            description: 'The most ancient and revered classical dance form of India, characterized by precise movements, intricate footwork, and expressive storytelling through mudras and abhinaya.',
            highlights: ['Traditional repertoire', 'Margam structure', 'Temple dance heritage', 'Costume & makeup training'],
            schedule: ['Monday 6:00 AM', 'Wednesday 6:00 AM', 'Friday 6:00 AM']
        },
        {
            id: 'contemporary',
            title: 'Contemporary Dance',
            subtitle: 'Modern Movement Expression',
            levels: ['Foundation', 'Intermediate', 'Advanced'],
            duration: '75 minutes',
            price: '₹3,000/month',
            description: 'A fusion of classical technique with modern choreographic sensibilities, exploring themes of identity, emotion, and social consciousness through innovative movement vocabulary.',
            highlights: ['Floor work techniques', 'Improvisation', 'Choreographic composition', 'Cross-cultural fusion'],
            schedule: ['Tuesday 7:00 PM', 'Thursday 6:30 AM', 'Friday 6:30 PM']
        },
        {
            id: 'folk',
            title: 'Folk Dance',
            subtitle: 'Regional Cultural Traditions',
            levels: ['All Levels', 'Cultural Immersion'],
            duration: '60 minutes',
            price: '₹2,500/month',
            description: 'Celebration of India\'s diverse regional dance traditions, from the energetic Bhangra of Punjab to the graceful Kuchipudi of Andhra Pradesh.',
            highlights: ['Regional variations', 'Festival celebrations', 'Community engagement', 'Cultural storytelling'],
            schedule: ['Tuesday 6:30 PM', 'Saturday 4:00 PM']
        },
        {
            id: 'creative',
            title: 'Creative Movement',
            subtitle: 'Experimental & Therapeutic',
            levels: ['Open Level', 'Therapeutic'],
            duration: '60 minutes',
            price: '₹2,000/month',
            description: 'An exploratory approach to movement that emphasizes personal expression, body awareness, and the therapeutic benefits of dance for mental and physical well-being.',
            highlights: ['Movement therapy', 'Personal expression', 'Body awareness', 'Stress relief'],
            schedule: ['Wednesday 7:00 PM', 'Friday 6:00 AM']
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-content > *', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });
            gsap.from('.classes-grid .class-card', {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.08,
                delay: 0.3,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="art-hub-classes" ref={pageRef}>
            <DynamicHero vertical="art-hub" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Art Hub Classes</span>
                    <h1>Discover Your Movement</h1>
                    <p>Explore our comprehensive range of dance programs designed for all levels and interests.</p>
                </div>
            </DynamicHero>

            <section className="classes-content section">
                <div className="container">
                    <div className="classes-grid">
                        {classesData.map((classItem) => (
                            <div 
                                key={classItem.id} 
                                className={`class-card ${expandedClass === classItem.id ? 'expanded' : ''}`}
                                onClick={() => setExpandedClass(expandedClass === classItem.id ? null : classItem.id)}
                            >
                                <div className="class-header">
                                    <div className="class-title-section">
                                        <h3>{classItem.title}</h3>
                                        <span className="class-subtitle">{classItem.subtitle}</span>
                                    </div>
                                    <div className="class-meta">
                                        <span className="price">{classItem.price}</span>
                                        <span className="duration">{classItem.duration}</span>
                                        <span className="expand-icon">{expandedClass === classItem.id ? '−' : '+'}</span>
                                    </div>
                                </div>
                                
                                {expandedClass === classItem.id && (
                                    <div className="class-details">
                                        <p className="class-description">{classItem.description}</p>
                                        
                                        <div className="class-info-grid">
                                            <div className="levels">
                                                <h5>Available Levels</h5>
                                                <div className="level-tags">
                                                    {classItem.levels.map((level, idx) => (
                                                        <span key={idx} className="level-tag">{level}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="schedule">
                                                <h5>Class Schedule</h5>
                                                <ul className="schedule-list">
                                                    {classItem.schedule.map((time, idx) => (
                                                        <li key={idx}>{time}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div className="highlights">
                                                <h5>Program Highlights</h5>
                                                <ul>
                                                    {classItem.highlights.map((highlight, idx) => (
                                                        <li key={idx}>{highlight}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="class-actions">
                                            <button className="enroll-btn">Enroll Now</button>
                                            <button className="trial-btn">Book Trial Class</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtHubClasses;