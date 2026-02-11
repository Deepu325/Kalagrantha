import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './ArtHubPages.scss';

const ArtHubEnroll = () => {
    const pageRef = useRef(null);
    const [enrollForm, setEnrollForm] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        program: '',
        level: '',
        experience: '',
        goals: '',
        schedule: '',
        medicalConditions: ''
    });
    const [enrollStatus, setEnrollStatus] = useState('');

    const programs = [
        { value: 'bharatanatyam', label: 'Bharatanatyam' },
        { value: 'contemporary', label: 'Contemporary Dance' },
        { value: 'folk', label: 'Folk Dance' },
        { value: 'creative', label: 'Creative Movement' },
        { value: 'multiple', label: 'Multiple Programs' }
    ];

    const levels = [
        { value: 'beginner', label: 'Beginner (No prior experience)' },
        { value: 'intermediate', label: 'Intermediate (1-3 years)' },
        { value: 'advanced', label: 'Advanced (3+ years)' },
        { value: 'professional', label: 'Professional Level' }
    ];

    const scheduleOptions = [
        { value: 'morning', label: 'Morning Classes (6:00 AM - 9:00 AM)' },
        { value: 'evening', label: 'Evening Classes (6:00 PM - 9:00 PM)' },
        { value: 'weekend', label: 'Weekend Classes Only' },
        { value: 'flexible', label: 'Flexible Schedule' }
    ];

    const benefits = [
        { icon: '👥', title: 'Small Class Sizes', desc: 'Maximum 12 students per class for personalized attention' },
        { icon: '🎭', title: 'Performance Opportunities', desc: 'Regular showcases and competitions throughout the year' },
        { icon: '🏆', title: 'Certification Programs', desc: 'Internationally recognized certificates upon completion' },
        { icon: '💡', title: 'Master Classes', desc: 'Monthly workshops with visiting artists and experts' },
        { icon: '🎵', title: 'Live Music', desc: 'Classes accompanied by live traditional musicians' },
        { icon: '📱', title: 'Digital Resources', desc: 'Access to online practice videos and theory materials' }
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
            gsap.from('.enroll-benefits .benefit-card', {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.05,
                delay: 0.3,
                ease: 'power2.out',
                clearProps: 'all'
            });

            gsap.from('.enroll-form', {
                y: 25,
                opacity: 0,
                duration: 0.5,
                delay: 0.4,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnrollStatus('submitting');
        
        setTimeout(() => {
            setEnrollStatus('success');
            setEnrollForm({
                name: '', email: '', phone: '', age: '', program: '', level: '',
                experience: '', goals: '', schedule: '', medicalConditions: ''
            });
            setTimeout(() => setEnrollStatus(''), 5000);
        }, 2000);
    };

    return (
        <div className="art-hub-enroll" ref={pageRef}>
            <DynamicHero vertical="art-hub" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Art Hub Enrollment</span>
                    <h1>Begin Your Artistic Journey</h1>
                    <p>Join our community of passionate dancers and transform your relationship with movement and expression.</p>
                </div>
            </DynamicHero>

            <section className="enroll-content section">
                <div className="container">
                    <div className="enroll-benefits">
                        <h2>Why Choose Kalagrantha Art Hub?</h2>
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="enrollment-section">
                        <div className="enrollment-info">
                            <h2>Ready to Start?</h2>
                            <p>Complete the enrollment form below and our admissions team will contact you within 24 hours to discuss your program options and schedule a trial class.</p>
                            
                            <div className="pricing-info">
                                <h4>Program Pricing</h4>
                                <div className="pricing-list">
                                    <div className="price-item">
                                        <span className="program">Bharatanatyam</span>
                                        <span className="price">₹3,500/month</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="program">Contemporary</span>
                                        <span className="price">₹3,000/month</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="program">Folk Dance</span>
                                        <span className="price">₹2,500/month</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="program">Creative Movement</span>
                                        <span className="price">₹2,000/month</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="enroll-form" onSubmit={handleSubmit}>
                            <h3>Enrollment Application</h3>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={enrollForm.name}
                                        onChange={(e) => setEnrollForm({...enrollForm, name: e.target.value})}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="age">Age *</label>
                                    <input
                                        type="number"
                                        id="age"
                                        value={enrollForm.age}
                                        onChange={(e) => setEnrollForm({...enrollForm, age: e.target.value})}
                                        required
                                        placeholder="Your age"
                                        min="5"
                                        max="80"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={enrollForm.email}
                                        onChange={(e) => setEnrollForm({...enrollForm, email: e.target.value})}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={enrollForm.phone}
                                        onChange={(e) => setEnrollForm({...enrollForm, phone: e.target.value})}
                                        required
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="program">Program Interest *</label>
                                    <select
                                        id="program"
                                        value={enrollForm.program}
                                        onChange={(e) => setEnrollForm({...enrollForm, program: e.target.value})}
                                        required
                                    >
                                        <option value="">Select a program</option>
                                        {programs.map(program => (
                                            <option key={program.value} value={program.value}>{program.label}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="level">Experience Level *</label>
                                    <select
                                        id="level"
                                        value={enrollForm.level}
                                        onChange={(e) => setEnrollForm({...enrollForm, level: e.target.value})}
                                        required
                                    >
                                        <option value="">Select your level</option>
                                        {levels.map(level => (
                                            <option key={level.value} value={level.value}>{level.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="schedule">Preferred Schedule *</label>
                                <select
                                    id="schedule"
                                    value={enrollForm.schedule}
                                    onChange={(e) => setEnrollForm({...enrollForm, schedule: e.target.value})}
                                    required
                                >
                                    <option value="">Select preferred schedule</option>
                                    {scheduleOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="experience">Previous Dance Experience</label>
                                <textarea
                                    id="experience"
                                    value={enrollForm.experience}
                                    onChange={(e) => setEnrollForm({...enrollForm, experience: e.target.value})}
                                    placeholder="Tell us about your previous dance training, if any..."
                                    rows="3"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="goals">Learning Goals</label>
                                <textarea
                                    id="goals"
                                    value={enrollForm.goals}
                                    onChange={(e) => setEnrollForm({...enrollForm, goals: e.target.value})}
                                    placeholder="What do you hope to achieve through dance training?"
                                    rows="3"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="medicalConditions">Medical Conditions or Physical Limitations</label>
                                <textarea
                                    id="medicalConditions"
                                    value={enrollForm.medicalConditions}
                                    onChange={(e) => setEnrollForm({...enrollForm, medicalConditions: e.target.value})}
                                    placeholder="Please mention any medical conditions or physical limitations we should be aware of..."
                                    rows="2"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="enroll-submit"
                                disabled={enrollStatus === 'submitting'}
                            >
                                {enrollStatus === 'submitting' ? 'Submitting Application...' : 'Submit Enrollment Application'}
                            </button>
                            
                            {enrollStatus === 'success' && (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <div className="success-content">
                                        <h4>Application Submitted Successfully!</h4>
                                        <p>Thank you for your interest in Kalagrantha Art Hub. Our admissions team will contact you within 24 hours to discuss your program options and schedule a trial class.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtHubEnroll;