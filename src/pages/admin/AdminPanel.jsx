import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { VERTICALS } from '../../constants/verticals';
import './AdminPanel.scss';

const AdminPanel = () => {
    const { isAdmin, galleries, updateGallery, events, addEvent, deleteEvent } = useAdmin();
    const [activeVertical, setActiveVertical] = useState('art-hub');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', venue: '' });
    const navigate = useNavigate();

    if (!isAdmin) {
        navigate('/');
        return null;
    }

    const handleAddImage = () => {
        if (newImageUrl.trim()) {
            const updatedImages = [...galleries[activeVertical], newImageUrl];
            updateGallery(activeVertical, updatedImages);
            setNewImageUrl('');
        }
    };

    const handleDeleteImage = (index) => {
        const updatedImages = galleries[activeVertical].filter((_, i) => i !== index);
        updateGallery(activeVertical, updatedImages);
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (newEvent.title && newEvent.date) {
            addEvent(activeVertical, { ...newEvent, id: Date.now() });
            setNewEvent({ title: '', date: '', time: '', venue: '' });
        }
    };

    return (
        <div className="admin-panel">
            <div className="admin-header">
                <h1>Admin Panel</h1>
                <button onClick={() => navigate('/')}>Back to Site</button>
            </div>

            <div className="admin-nav">
                {VERTICALS.map(v => (
                    <button
                        key={v.id}
                        className={activeVertical === v.id ? 'active' : ''}
                        onClick={() => setActiveVertical(v.id)}
                    >
                        {v.shortName}
                    </button>
                ))}
            </div>

            <div className="admin-content">
                <div className="admin-section">
                    <h2>Gallery Management - {VERTICALS.find(v => v.id === activeVertical)?.shortName}</h2>
                    <div className="add-image">
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            value={newImageUrl}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                        />
                        <button onClick={handleAddImage}>Add Image</button>
                    </div>
                    <div className="gallery-grid">
                        {galleries[activeVertical]?.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`Gallery ${index + 1}`} />
                                <button className="delete-btn" onClick={() => handleDeleteImage(index)}>
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="admin-section">
                    <h2>Event Calendar - {VERTICALS.find(v => v.id === activeVertical)?.shortName}</h2>
                    <form className="add-event" onSubmit={handleAddEvent}>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            required
                        />
                        <input
                            type="date"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                            required
                        />
                        <input
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Venue"
                            value={newEvent.venue}
                            onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                        />
                        <button type="submit">Add Event</button>
                    </form>
                    <div className="events-list">
                        {events[activeVertical]?.map(event => (
                            <div key={event.id} className="event-item">
                                <div>
                                    <h4>{event.title}</h4>
                                    <p>{event.date} {event.time && `at ${event.time}`}</p>
                                    {event.venue && <p>Venue: {event.venue}</p>}
                                </div>
                                <button onClick={() => deleteEvent(activeVertical, event.id)}>Delete</button>
                            </div>
                        ))}
                        {events[activeVertical]?.length === 0 && (
                            <p className="no-events">No events scheduled</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
