import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1>About Kalagrantha</h1>
                    <p className="lead">Nurturing Creativity Through Movement & Arts</p>
                </div>
            </section>

            <section className="about-content section">
                <div className="container">
                    <div className="content-wrapper">
                        <p>
                            <span className="highlight">Kalagrantha – The Art Hub</span> is a premier movement and performing arts education organization based in Bangalore, dedicated to nurturing <span className="emphasis">creativity, discipline, wellness, and cultural appreciation</span> in learners of all ages.
                        </p>
                        <p>
                            At its core, Kalagrantha blends <span className="emphasis">performing arts and holistic education</span>—including dance, yoga, theatre, martial arts, and movement—into structured programs that promote <span className="emphasis">physical development, emotional intelligence, and social confidence</span>. These programs are designed to enrich school curricula and provide students with meaningful learning outcomes.
                        </p>
                        <p>
                            Kalagrantha understands the challenges that schools face in providing consistent, high-quality performing arts education. To address these, it offers <span className="emphasis">expert instructors, a well-defined progression framework, and a reliable, consistent schedule</span> of classes, ensuring impactful learning and growth.
                        </p>
                        <p>
                            The institution's holistic approach not only develops physical finesse and artistic skill but also fosters <span className="emphasis">emotional growth, teamwork, and creative expression</span>. With <span className="highlight">international recognition, awards, and partnerships</span>, Kalagrantha brings credibility and excellence to every educational engagement.
                        </p>
                        <p>
                            By partnering with schools and organizations, Kalagrantha enhances traditional academics with innovative movement education that boosts <span className="emphasis">student engagement, confidence, and well-rounded development</span>.
                        </p>
                        <div className="cta-section">
                            <Link to="/contact" className="about-cta-button">Get in Touch</Link>
                            <Link to="/" className="about-cta-button secondary">Explore Programs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
