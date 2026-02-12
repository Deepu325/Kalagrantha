import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import YogaTTCMobileNavbar from './YogaTTCMobileNavbar';

const YogaTTCCertification = () => {
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
            gsap.from('.cert-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.3,
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
                        <h1>Certification</h1>
                        <p>Internationally Recognized Yoga Alliance Certifications</p>
                    </div>
                </div>
            </header>

            <section className="certification-info section">
                <div className="container">
                    <div className="cert-grid">
                        <div className="cert-card">
                            <h2>RYT 200 Certification</h2>
                            <p>Registered Yoga Teacher 200-hour certification recognized by Yoga Alliance USA</p>
                            <ul>
                                <li>Lifetime certification validity</li>
                                <li>Global recognition</li>
                                <li>Teaching eligibility worldwide</li>
                                <li>Continuing education credits</li>
                            </ul>
                        </div>
                        <div className="cert-card">
                            <h2>RYT 500 Certification</h2>
                            <p>Advanced 500-hour certification for experienced practitioners</p>
                            <ul>
                                <li>Enhanced teaching credentials</li>
                                <li>Mentorship opportunities</li>
                                <li>Workshop leadership qualification</li>
                                <li>Advanced practitioner status</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const YogaTTCFaculty = () => {
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
            gsap.from('.faculty-card', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                delay: 0.3,
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
                        <h1>Faculty</h1>
                        <p>Learn from Experienced and Certified Master Teachers</p>
                    </div>
                </div>
            </header>

            <section className="faculty-grid section">
                <div className="container">
                    <div className="faculty-members">
                        <div className="faculty-card">
                            <div className="faculty-image">
                                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Priya Sharma" />
                            </div>
                            <h3>Priya Sharma</h3>
                            <p className="title">Lead Instructor & Founder</p>
                            <p>E-RYT 500, 15+ years experience. Specializes in Hatha and Vinyasa yoga with deep knowledge of Sanskrit and philosophy.</p>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-image">
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop" alt="Dr. Rajesh Kumar" />
                            </div>
                            <h3>Dr. Rajesh Kumar</h3>
                            <p className="title">Anatomy & Physiology</p>
                            <p>MD, Yoga Therapist. Expert in therapeutic applications of yoga and human anatomy for yoga practitioners.</p>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-image">
                                <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&h=300&fit=crop" alt="Ananda Devi" />
                            </div>
                            <h3>Ananda Devi</h3>
                            <p className="title">Philosophy & Meditation</p>
                            <p>MA Sanskrit, 20+ years in traditional yoga. Teaches classical yoga philosophy, meditation, and pranayama techniques.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const YogaTTCEligibility = () => {
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
            gsap.from('.eligibility-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.3,
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
                        <h1>Eligibility</h1>
                        <p>Requirements and Prerequisites for Our Training Programs</p>
                    </div>
                </div>
            </header>

            <section className="eligibility-info section">
                <div className="container">
                    <div className="eligibility-grid">
                        <div className="eligibility-card">
                            <h2>200-Hour Program</h2>
                            <h3>Prerequisites:</h3>
                            <ul>
                                <li>Minimum 6 months regular yoga practice</li>
                                <li>Basic understanding of yoga postures</li>
                                <li>Physical fitness for intensive training</li>
                                <li>Age: 18+ years</li>
                                <li>High school diploma or equivalent</li>
                            </ul>
                            <h3>Recommended:</h3>
                            <ul>
                                <li>1+ years of consistent practice</li>
                                <li>Workshop or retreat experience</li>
                                <li>Basic meditation experience</li>
                            </ul>
                        </div>
                        <div className="eligibility-card">
                            <h2>500-Hour Program</h2>
                            <h3>Prerequisites:</h3>
                            <ul>
                                <li>Completed 200-hour YTT certification</li>
                                <li>Minimum 2 years teaching experience</li>
                                <li>Advanced personal practice</li>
                                <li>Age: 21+ years</li>
                                <li>Current Yoga Alliance registration</li>
                            </ul>
                            <h3>Required:</h3>
                            <ul>
                                <li>Teaching portfolio submission</li>
                                <li>Personal practice video</li>
                                <li>Letter of recommendation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const YogaTTCRegister = () => {
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
            gsap.from('.batch-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                delay: 0.3,
                ease: 'power2.out'
            });
            gsap.from('.registration-process li', {
                x: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.5,
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
                        <h1>Register</h1>
                        <p>Begin Your Journey as a Certified Yoga Teacher</p>
                    </div>
                </div>
            </header>

            <section className="registration-info section">
                <div className="container">
                    <div className="registration-grid">
                        <div className="program-dates">
                            <h2>Upcoming Batches</h2>
                            <div className="batch-card">
                                <h3>200-Hour Intensive</h3>
                                <p><strong>Dates:</strong> March 15 - April 12, 2024</p>
                                <p><strong>Schedule:</strong> Monday to Friday, 7:00 AM - 5:00 PM</p>
                                <p><strong>Investment:</strong> ₹85,000 (Early Bird: ₹75,000)</p>
                                <button className="register-btn">Register Now</button>
                            </div>
                            <div className="batch-card">
                                <h3>500-Hour Advanced</h3>
                                <p><strong>Dates:</strong> April 20 - June 15, 2024</p>
                                <p><strong>Schedule:</strong> Weekends + 2 Week Intensive</p>
                                <p><strong>Investment:</strong> ₹1,65,000 (Early Bird: ₹1,45,000)</p>
                                <button className="register-btn">Register Now</button>
                            </div>
                        </div>
                        <div className="registration-process">
                            <h2>Registration Process</h2>
                            <ol>
                                <li>Submit online application form</li>
                                <li>Schedule personal interview</li>
                                <li>Complete health assessment</li>
                                <li>Pay registration fee (₹15,000)</li>
                                <li>Receive welcome package</li>
                                <li>Attend orientation session</li>
                            </ol>
                            <div className="contact-info">
                                <h3>Contact Us</h3>
                                <p>📧 yoga@kalagrantha.com</p>
                                <p>📞 +91 98765 43210</p>
                                <p>📍 Bangalore, Karnataka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { YogaTTCCertification, YogaTTCFaculty, YogaTTCEligibility, YogaTTCRegister };