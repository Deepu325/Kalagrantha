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
    const [galleries, setGalleries] = useState({
        'art-hub': [
            'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
            'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
            'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
            'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800'
        ],
        'yoga-ttc': [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800',
        ],
        'movement-epics': [
            'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800',
            'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
        ],
        'creative-hub': [
            'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
        ],
        'events': [
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
            'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
        ]
    });

    const [events, setEvents] = useState({
        'art-hub': [],
        'yoga-ttc': [],
        'movement-epics': [],
        'creative-hub': [],
        'events': []
    });

    useEffect(() => {
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus === 'true') {
            setIsAdmin(true);
        }
    }, []);

    const login = (password) => {
        if (password === 'admin123') {
            setIsAdmin(true);
            localStorage.setItem('isAdmin', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
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
            [vertical]: [...prev[vertical], event]
        }));
    };

    const deleteEvent = (vertical, eventId) => {
        setEvents(prev => ({
            ...prev,
            [vertical]: prev[vertical].filter(e => e.id !== eventId)
        }));
    };

    return (
        <AdminContext.Provider value={{
            isAdmin,
            login,
            logout,
            galleries,
            updateGallery,
            events,
            addEvent,
            deleteEvent
        }}>
            {children}
        </AdminContext.Provider>
    );
};
