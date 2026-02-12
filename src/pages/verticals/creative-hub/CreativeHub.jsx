import React, { useRef, useEffect } from 'react';
import { useNav } from '../../../context/NavContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CreativeHubGallerySwiper from './CreativeHubGallerySwiper';
import GallerySection from '../../../components/sections/GallerySection';
import './CreativeHubPages.scss';

gsap.registerPlugin(ScrollTrigger);

const CreativeHub = () => {
    const { activeVertical } = useNav();
    const pageRef = useRef(null);
    
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.section-title', {
                y: 60,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.spaces-section',
                    start: 'top 85%'
                }
            });
            
            gsap.from('.spaces-section .space-card', {
                y: 80,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.spaces-section',
                    start: 'top 80%'
                }
            });
            
            gsap.from('.masonry-gallery .section-title', {
                y: 60,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.masonry-gallery',
                    start: 'top 85%'
                }
            });
            
            gsap.from('.masonry-item', {
                scale: 0.8,
                duration: 0.7,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.masonry-gallery',
                    start: 'top 75%'
                }
            });
            
            gsap.from('.stat', {
                y: 50,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.stats-section',
                    start: 'top 85%'
                }
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);
    
    if (!activeVertical) return null;

    return (
        <div className="creative-hub-main" ref={pageRef}>
            <CreativeHubGallerySwiper />

            <section className="spaces-section section">
                <div className="container">
                    <h2 className="section-title">Studio Infrastructure</h2>
                    <div className="spaces-grid">
                        {activeVertical.spaces?.map((space, i) => (
                            <div key={i} className="space-card">
                                <div className="space-info">
                                    <h3>{space.name}</h3>
                                    <span className="type">{space.type}</span>
                                </div>
                                <div className="space-tech">
                                    <p><strong>Available Tech:</strong> {space.tech}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="masonry-gallery section">
                <div className="container">
                    <h2 className="section-title">Ecosystem Focus</h2>
                    <div className="masonry-grid">
                        <div className="masonry-item large">
                            <div className="item-overlay">
                                <h3>{activeVertical.features?.[0]?.title || 'Artist Residencies'}</h3>
                                <p>{activeVertical.features?.[0]?.text || 'Fully equipped studio spaces and mentorship for experimental projects.'}</p>
                            </div>
                        </div>
                        <div className="masonry-item small">
                            <div className="item-overlay">
                                <h3>{activeVertical.features?.[1]?.title || 'Cross-Pollination'}</h3>
                                <p>{activeVertical.features?.[1]?.text || 'Join a community where movement meets technology, film, and digital art.'}</p>
                            </div>
                        </div>
                        <div className="masonry-item medium">
                            <div className="item-overlay">
                                <h3>Collaborative Reach</h3>
                                <p>{activeVertical.stats?.[1]?.label || 'Resident Projects'}: {activeVertical.stats?.[1]?.value || '20'}</p>
                            </div>
                        </div>
                        <div className="masonry-item wide">
                            <div className="item-overlay">
                                <h3>{activeVertical.features?.[2]?.title || 'Open Gallery'}</h3>
                                <p>{activeVertical.features?.[2]?.text || 'Regular exhibitions and pop-up shows to showcase new-age creative work.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-section section">
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
        </div>
    );
};

export default CreativeHub;