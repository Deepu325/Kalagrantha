import React, { useState } from 'react';
import { AdminContext } from './createAdminContext';

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(() => {
        const token = localStorage.getItem('adminToken');
        return token === 'fallback-token';
    });
    const [galleries, setGalleries] = useState({});
    const [events, setEvents] = useState({});

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                setIsAdmin(true);
                return { success: true };
            } else {
                return { success: false, error: data.error };
            }
        } catch {
            return { success: false, error: 'Connection error' };
        }
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem('adminToken');
    };

    const fetchGallery = async (vertical) => {
        try {
            const response = await fetch(`http://localhost:5000/api/gallery/${vertical}`);
            if (response.ok) {
                const data = await response.json();
                setGalleries(prev => ({
                    ...prev,
                    [vertical]: data
                }));
                return data;
            }
        } catch (error) {
            console.error('Failed to fetch gallery:', error);
        }
        return [];
    };

    const updateGallery = (vertical, images) => {
        setGalleries(prev => ({
            ...prev,
            [vertical]: images
        }));
    };

    const addEvent = (vertical, event) => {
        setEvents(prev => ({
            ...prev,
            [vertical]: [...(prev[vertical] || []), event]
        }));
    };

    const deleteEvent = (vertical, eventId) => {
        setEvents(prev => ({
            ...prev,
            [vertical]: (prev[vertical] || []).filter(e => e.id !== eventId)
        }));
    };

    return (
        <AdminContext.Provider value={{
            isAdmin,
            login,
            logout,
            galleries,
            updateGallery,
            fetchGallery,
            events,
            addEvent,
            deleteEvent
        }}>
            {children}
        </AdminContext.Provider>
    );
};
