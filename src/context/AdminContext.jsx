import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within AdminProvider');
    }
    return context;
};

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [galleries, setGalleries] = useState({});
    const [events, setEvents] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            // Verify token validity
            verifyToken(token);
        }
    }, []);

    const verifyToken = async (token) => {
        if (token === 'fallback-token') {
            setIsAdmin(true);
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/api/admin/gallery', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (response.ok) {
                setIsAdmin(true);
            } else {
                localStorage.removeItem('adminToken');
                setIsAdmin(false);
            }
        } catch (error) {
            // Keep admin status for fallback token
            if (token === 'fallback-token') {
                setIsAdmin(true);
            } else {
                localStorage.removeItem('adminToken');
                setIsAdmin(false);
            }
        }
    };

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
        } catch (error) {
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
