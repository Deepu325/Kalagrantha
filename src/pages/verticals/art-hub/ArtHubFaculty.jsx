import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './ArtHubPages.scss';

const ArtHubFaculty = () => {
    const pageRef = useRef(null);

    const facultyData = [
        {
            name: 'Dr. Priya Krishnamurthy',
            specialization: 'Bharatanatyam & Choreography',
            experience: '25 Years',
            image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?w=400',
            bio: 'Trained under Padma Bhushan Smt. Alarmel Valli, Dr. Krishnamurthy is a renowned performer and teacher who has presented solo recitals across India and internationally. She holds a PhD in Dance from Bharathidasan University.',
            achievements: ['Padma Shri Recipient 2018', 'Sangeet Natak Akademi Award', '500+ International Performances'],
            teaching: 'Bharatanatyam (All Levels), Classical Choreography, Abhinaya'
        },
        {
            name: 'Arjun Mehta',
            specialization: 'Contemporary & Jazz',
            experience: '18 Years',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            bio: 'A versatile choreographer and performer trained at the London Contemporary Dance School. Arjun has worked with leading dance companies across Europe and brings a global perspective to movement training.',
            achievements: ['London Contemporary Dance Graduate', 'Choreographer for 50+ Productions', 'International Dance Festival Judge'],
            teaching: 'Contemporary Dance, Jazz, Movement Improvisation, Choreography'
        },
        {
            name: 'Meera Patel',
            specialization: 'Folk Dance & Cultural Studies',
            experience: '22 Years',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            bio: 'A cultural anthropologist and master teacher of Indian folk traditions. Meera has documented and preserved over 50 regional dance forms and regularly conducts cultural immersion workshops.',
            achievements: ['UNESCO Cultural Heritage Award', 'Author of 3 Dance Books', 'Folk Dance Documentation Expert'],
            teaching: 'Folk Dance (All Regions), Cultural Studies, Creative Movement'
        },
        {
            name: 'Ravi Shankar',
            specialization: 'Music & Rhythm',
            experience: '30 Years',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            bio: 'Master percussionist and music director specializing in Carnatic music and dance accompaniment. Ravi provides live musical support for classes and performances, enhancing the authentic learning experience.',
            achievements: ['Carnatic Music Vidwan', 'Live Accompanist for 1000+ Performances', 'Music Composition for Dance'],
            teaching: 'Rhythm & Tala, Music Theory, Live Accompaniment'
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
            gsap.from('.faculty-grid .faculty-card', {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                delay: 0.3,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="art-hub-faculty" ref={pageRef}>
            <DynamicHero vertical="art-hub" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Art Hub Faculty</span>
                    <h1>Learn from the Masters</h1>
                    <p>Meet our distinguished faculty of accomplished artists, teachers, and cultural ambassadors.</p>
                </div>
            </DynamicHero>

            <section className="faculty-content section">
                <div className="container">
                    <div className="faculty-grid">
                        {facultyData.map((member, index) => (
                            <div key={index} className="faculty-card">
                                <div className="faculty-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="experience-badge">{member.experience}</div>
                                </div>
                                <div className="faculty-info">
                                    <h3>{member.name}</h3>
                                    <span className="specialization">{member.specialization}</span>
                                    <p className="bio">{member.bio}</p>
                                    
                                    <div className="faculty-details">
                                        <div className="teaching-areas">
                                            <h5>Teaching Areas</h5>
                                            <p>{member.teaching}</p>
                                        </div>
                                        
                                        <div className="achievements">
                                            <h5>Key Achievements</h5>
                                            <ul>
                                                {member.achievements.map((achievement, idx) => (
                                                    <li key={idx}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtHubFaculty;