import React, { useState, useEffect } from 'react';
import './EnquiryManager.scss';

const EnquiryManager = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const verticals = [
        { value: 'all', label: 'All Verticals' },
        { value: 'art-hub', label: 'Art Hub' },
        { value: 'movement-epics', label: 'Movement & Epics' },
        { value: 'yoga-ttc', label: 'Yoga TTC' },
        { value: 'creative-hub', label: 'Creative Hub' },
        { value: 'events', label: 'Events' }
    ];

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('http://localhost:5000/api/admin/enquiries', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setEnquiries(data);
            }
        } catch (error) {
            console.error('Failed to fetch enquiries:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredEnquiries = filter === 'all' 
        ? enquiries 
        : enquiries.filter(enquiry => enquiry.vertical === filter);

    if (loading) {
        return <div className="loading">Loading enquiries...</div>;
    }

    return (
        <div className="enquiry-manager">
            <div className="manager-header">
                <div className="filter-section">
                    <label htmlFor="vertical-filter">Filter by Vertical:</label>
                    <select
                        id="vertical-filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        {verticals.map(v => (
                            <option key={v.value} value={v.value}>{v.label}</option>
                        ))}
                    </select>
                </div>
                <div className="stats">
                    <span>{filteredEnquiries.length} enquiries</span>
                </div>
            </div>

            {filteredEnquiries.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📧</div>
                    <h3>No enquiries found</h3>
                    <p>Contact form submissions will appear here</p>
                </div>
            ) : (
                <div className="enquiries-list">
                    {filteredEnquiries.map(enquiry => (
                        <div key={enquiry._id} className="enquiry-card">
                            <div className="enquiry-header">
                                <div className="enquiry-info">
                                    <h3>{enquiry.name}</h3>
                                    <p className="email">{enquiry.email}</p>
                                </div>
                                <div className="enquiry-meta">
                                    <span className="vertical">{enquiry.vertical}</span>
                                    <span className="date">
                                        {new Date(enquiry.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className="enquiry-message">
                                <p>{enquiry.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnquiryManager;