import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        vertical: 'general',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5000/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', vertical: 'general', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-page">
            <div className="container section">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h1>Get in Touch</h1>
                        <p>Our ecosystem is open for collaborations, student registrations, and institutional partnerships.</p>
                        <div className="info-item">
                            <h4>Email</h4>
                            <p>collaborate@imagostudio.com</p>
                        </div>
                        <div className="info-item">
                            <h4>Visit</h4>
                            <p>Studio 42, Cultural Avenue, Global City</p>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        {status === 'success' ? (
                            <div className="success-message">
                                <h2>Thank you!</h2>
                                <p>Your enquiry has been received. Our team will get back to you shortly.</p>
                                <button onClick={() => setStatus('')} className="cta-button">Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Vertical of Interest</label>
                                    <select
                                        value={formData.vertical}
                                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="art-hub">Art Hub</option>
                                        <option value="movement-epics">Movement & Epics</option>
                                        <option value="yoga-ttc">Yoga TTC</option>
                                        <option value="creative-hub">Creative Hub</option>
                                        <option value="events">Events & Entertainment</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="cta-button" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
