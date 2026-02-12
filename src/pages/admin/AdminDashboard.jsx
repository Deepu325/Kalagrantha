import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryUpload from '../../components/admin/GalleryUpload';
import GalleryManager from '../../components/admin/GalleryManager';
import HeroUpload from '../../components/admin/HeroUpload';
import HeroManager from '../../components/admin/HeroManager';
import EnquiryManager from '../../components/admin/EnquiryManager';
import CreativeHubGalleryManager from '../../components/admin/CreativeHubGalleryManager';
import './AdminDashboard.scss';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('upload');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    if (!isAuthenticated) {
        return <div className="loading">Authenticating...</div>;
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'upload':
                return <GalleryUpload />;
            case 'manage':
                return <GalleryManager />;
            case 'hero-upload':
                return <HeroUpload />;
            case 'hero-manage':
                return <HeroManager />;
            case 'creative-hub-gallery':
                return <CreativeHubGalleryManager />;
            case 'enquiries':
                return <EnquiryManager />;
            default:
                return <GalleryUpload />;
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="dashboard-sidebar">
                <div className="sidebar-header">
                    <div className="admin-logo">
                        <div className="logo-emblem">KA</div>
                        <span>Admin Panel</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'upload' ? 'active' : ''}`}
                        onClick={() => setActiveTab('upload')}
                    >
                        <span className="nav-icon">📤</span>
                        Upload Gallery
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'manage' ? 'active' : ''}`}
                        onClick={() => setActiveTab('manage')}
                    >
                        <span className="nav-icon">🖼️</span>
                        Manage Images
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'hero-upload' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hero-upload')}
                    >
                        <span className="nav-icon">🎭</span>
                        Upload Hero
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'hero-manage' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hero-manage')}
                    >
                        <span className="nav-icon">🎨</span>
                        Manage Heroes
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'creative-hub-gallery' ? 'active' : ''}`}
                        onClick={() => setActiveTab('creative-hub-gallery')}
                    >
                        <span className="nav-icon">🎪</span>
                        Creative Hub Gallery
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'enquiries' ? 'active' : ''}`}
                        onClick={() => setActiveTab('enquiries')}
                    >
                        <span className="nav-icon">📧</span>
                        Enquiries
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <span className="nav-icon">🚪</span>
                        Logout
                    </button>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="content-header">
                    <h1>{activeTab === 'upload' ? 'Upload Gallery' : activeTab === 'manage' ? 'Manage Images' : activeTab === 'hero-upload' ? 'Upload Hero Images' : activeTab === 'hero-manage' ? 'Manage Hero Images' : activeTab === 'creative-hub-gallery' ? 'Creative Hub Gallery' : 'Enquiries'}</h1>
                </div>
                <div className="content-body">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;