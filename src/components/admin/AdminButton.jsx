import React, { useState } from 'react';
import { useAdmin } from '../../context/useAdmin';
import { useNavigate } from 'react-router-dom';
import './AdminButton.scss';

const AdminButton = () => {
    const { isAdmin, login, logout } = useAdmin();
    const [showLogin, setShowLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(password)) {
            setShowLogin(false);
            setPassword('');
            setError('');
            navigate('/admin');
        } else {
            setError('Invalid password');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (isAdmin) {
        return (
            <div className="admin-button-container">
                <button className="admin-btn logged-in" onClick={() => navigate('/admin')}>
                    Admin Panel
                </button>
                <button className="admin-btn logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <>
            <button className="admin-btn" onClick={() => setShowLogin(true)}>
                🔐 Admin
            </button>
            {showLogin && (
                <div className="admin-login-modal" onClick={() => setShowLogin(false)}>
                    <div className="login-box" onClick={(e) => e.stopPropagation()}>
                        <h3>Admin Login</h3>
                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                            {error && <p className="error">{error}</p>}
                            <div className="btn-group">
                                <button type="submit">Login</button>
                                <button type="button" onClick={() => setShowLogin(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminButton;
