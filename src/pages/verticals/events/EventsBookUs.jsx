import React, { useState } from 'react';
import EventsNavbar from './EventsNavbar';
import './EventsSubPages.scss';

const EventsBookUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        eventType: '',
        eventDate: '',
        location: '',
        budget: '',
        attendees: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
    };

    const eventTypes = [
        "Corporate Event",
        "Cultural Festival",
        "Private Celebration",
        "Brand Activation",
        "Film & Media Event",
        "Educational Workshop",
        "Other"
    ];

    const budgetRanges = [
        "Under ₹2,00,000",
        "₹2,00,000 - ₹5,00,000",
        "₹5,00,000 - ₹10,00,000",
        "₹10,00,000 - ₹25,00,000",
        "₹25,00,000 - ₹50,00,000",
        "Above ₹50,00,000"
    ];

    return (
        <div className="events-page">
            <EventsNavbar />
            <section className="page-hero">
                <div className="container">
                    <h1>Book Us</h1>
                    <p>Let's create an unforgettable experience together</p>
                </div>
            </section>

            <section className="booking-section section">
                <div className="container">
                    <div className="booking-content">
                        <div className="booking-info">
                            <h2>Ready to Get Started?</h2>
                            <p>Fill out the form and our team will get back to you within 24 hours with a customized proposal.</p>
                            
                            <div className="contact-methods">
                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">✉️</div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>events@kalagrantha.com</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div>
                                        <h4>Office</h4>
                                        <p>Events Division, Kalagrantha Campus, Arts District</p>
                                    </div>
                                </div>
                            </div>

                            <div className="process-steps">
                                <h3>Our Process</h3>
                                <div className="steps">
                                    <div className="step">
                                        <span className="step-number">1</span>
                                        <p>Initial Consultation</p>
                                    </div>
                                    <div className="step">
                                        <span className="step-number">2</span>
                                        <p>Proposal & Planning</p>
                                    </div>
                                    <div className="step">
                                        <span className="step-number">3</span>
                                        <p>Execution & Delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="booking-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-row">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company/Organization"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <select
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Event Type *</option>
                                        {eventTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="date"
                                        name="eventDate"
                                        placeholder="Event Date"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Event Location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="number"
                                        name="attendees"
                                        placeholder="Expected Attendees"
                                        value={formData.attendees}
                                        onChange={handleChange}
                                    />
                                </div>

                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="full-width"
                                >
                                    <option value="">Select Budget Range</option>
                                    {budgetRanges.map((range, index) => (
                                        <option key={index} value={range}>{range}</option>
                                    ))}
                                </select>

                                <textarea
                                    name="description"
                                    placeholder="Tell us about your event vision, requirements, and any specific needs..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="5"
                                ></textarea>

                                <button type="submit" className="submit-btn">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsBookUs;