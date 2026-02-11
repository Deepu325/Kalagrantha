import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogo.scss';

const AdminLogo = () => {
    return (
        <Link to="/admin/login" className="admin-logo-link">
            <div className="admin-logo">
                <div className="logo-emblem">KA</div>
            </div>
        </Link>
    );
};

export default AdminLogo;