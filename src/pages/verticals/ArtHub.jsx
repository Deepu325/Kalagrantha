import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNav } from '../../context/NavContext';
import GallerySection from '../../components/sections/GallerySection';
import artHeroImg from '../../assets/images/art_hub_hero_bg.png';
import './VerticalPage.scss';

const ArtHub = () => {
    const pageRef = useRef(null);
    const { activeVertical } = useNav();
    const [activeTab, setActiveTab] = React.useState(0);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [activeGallery, setActiveGallery] = React.useState(0);

    const tabContent = [
        { title: 'Bharatanatyam', desc: 'Classical Indian dance form with intricate footwork and expressive storytelling', img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600' },
        { title: 'Contemporary', desc: 'Modern movement exploring creative expression and innovative choreography', img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600' },
        { title: 'Folk Dance', desc: 'Traditional regional dances celebrating cultural heritage and community', img: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600' },
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveGallery((prev) => (prev + 1) % tabContent.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!pageRef.current) return;

        const ctx = gsap.context(() => {
            // Editorial staggered reveal
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
            
            tl.from('.hero-content .subtitle', {
                y: 12,
                opacity: 0,
                duration: 0.5,
                clearProps: 'all'
            })
            .from('.hero-content h1', {
                y: 12,
                opacity: 0,
                duration: 0.6,
                clearProps: 'all'
            }, '-=0.3')
            .from('.hero-content > p', {
                y: 12,
                opacity: 0,
                duration: 0.5,
                clearProps: 'all'
            }, '-=0.3')
            .from('.hero-tabs .tab-btn', {
                y: 8,
                opacity: 0,
                stagger: 0.08,
                duration: 0.4,
                clearProps: 'all'
            }, '-=0.2')
            .from('.hero-cta-group .cta-btn', {
                y: 8,
                opacity: 0,
                stagger: 0.1,
                duration: 0.4,
                clearProps: 'all'
            }, '-=0.2');

            // Count-up animation for stats
            gsap.from('.mini-stat', {
                scrollTrigger: {
                    trigger: '.hero-stats-mini',
                    start: 'top 90%',
                    once: true
                },
                opacity: 0,
                y: 12,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'all',
                onComplete: () => {
                    document.querySelectorAll('.mini-val').forEach(el => {
                        const target = parseInt(el.getAttribute('data-count'));
                        let current = 0;
                        const increment = target / 30;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                el.textContent = target + '+';
                                clearInterval(timer);
                            } else {
                                el.textContent = Math.floor(current) + '+';
                            }
                        }, 40);
                    });
                }
            });

            // Gentle parallax on gallery preview
            gsap.to('.hero-gallery-preview', {
                scrollTrigger: {
                    trigger: '.page-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 50,
                ease: 'none'
            });

            gsap.from('.feature-box', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                scrollTrigger: {
                    trigger: '.features',
                    start: 'top 80%',
                },
                clearProps: 'all'
            });

            gsap.from('.faculty-card', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.faculty-section',
                    start: 'top 80%',
                },
                clearProps: 'all'
            });

            gsap.from('.timetable-item', {
                x: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                scrollTrigger: {
                    trigger: '.timetable-section',
                    start: 'top 80%',
                },
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, [activeVertical]);

    if (!activeVertical) return null;

    return (
        <div className="vertical-page art-hub-page" ref={pageRef}>
            <header className="page-hero has-bg">
                <div className="hero-bg-wrapper">
                    <img src={artHeroImg} alt={activeVertical.name} className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-ambient-shapes">
                    <div className="ambient-shape shape-1"></div>
                    <div className="ambient-shape shape-2"></div>
                    <div className="ambient-shape shape-3"></div>
                </div>
                <div className="hero-gallery-preview">
                    {tabContent.map((tab, i) => (
                        <div 
                            key={i} 
                            className={`gallery-preview-item ${activeGallery === i ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${tab.img})` }}
                        />
                    ))}
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">{activeVertical.name}</span>
                        <h1>{activeVertical.cta}</h1>
                        <p>{activeVertical.description}</p>
                        <div className="hero-tabs">
                            {tabContent.map((tab, i) => (
                                <button
                                    key={i}
                                    className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveTab(i)}
                                    onMouseEnter={() => setActiveGallery(i)}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="tab-content-display" key={activeTab}>
                            <p>{tabContent[activeTab].desc}</p>
                        </div>
                        <div className="hero-cta-group">
                            <button className="cta-btn primary">
                                Enroll Now
                            </button>
                            <button className="cta-btn secondary">
                                View Schedule <span className="arrow">→</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-stats-mini">
                        <div className="mini-stat">
                            <span className="mini-val" data-count="500">500+</span>
                            <span className="mini-label">Students</span>
                        </div>
                        <div className="mini-stat">
                            <span className="mini-val" data-count="15">15+</span>
                            <span className="mini-label">Years</span>
                        </div>
                        <div className="mini-stat">
                            <span className="mini-val" data-count="20">20+</span>
                            <span className="mini-label">Faculty</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="features section">
                <div className="container">
                    <h2 className="section-title">Why Choose Art Hub</h2>
                    <div className="feature-grid">
                        {activeVertical.features?.map((feature, i) => (
                            <div key={i} className="feature-box">
                                <div className="feature-number">0{i + 1}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                                <div className="feature-arrow">→</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {activeVertical.stats?.map((stat, i) => (
                            <div key={i} className="stat">
                                <span className="stat-val">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faculty-section section">
                <div className="container">
                    <h2 className="section-title">Expert Faculty</h2>
                    <div className="faculty-grid">
                        {activeVertical.faculty?.map((member, i) => (
                            <div key={i} className="faculty-card">
                                <h3>{member.name}</h3>
                                <span className="role">{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="timetable-section section">
                <div className="container">
                    <h2 className="section-title">Schedule</h2>
                    <div className="timetable-list">
                        {activeVertical.classes?.map((cls, i) => (
                            <div key={i} className="timetable-item">
                                <div className="times">
                                    <h4>{cls.name}</h4>
                                    <span>{cls.schedule}</span>
                                </div>
                                <div className="level">
                                    <span>{cls.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GallerySection images={[
                'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
                'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
                'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
                'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800'
            ]} />
        </div>
    );
};

export default ArtHub;
