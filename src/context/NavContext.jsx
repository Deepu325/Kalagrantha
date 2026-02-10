import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { VERTICALS } from '../constants/verticals';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const location = useLocation();
    const [activeVertical, setActiveVertical] = useState(null);
    const [theme, setTheme] = useState('theme-parent');

    useEffect(() => {
        const currentPath = location.pathname;
        const vertical = VERTICALS.find(v => currentPath.startsWith(v.path));

        if (vertical) {
            setActiveVertical(vertical);
            setTheme(vertical.theme);
            document.body.setAttribute('data-theme', vertical.theme);
        } else {
            setActiveVertical(null);
            setTheme('theme-parent');
            document.body.removeAttribute('data-theme');
        }
    }, [location.pathname]);

    return (
        <NavContext.Provider value={{ activeVertical, theme }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => useContext(NavContext);
