import React, { useState, useEffect } from 'react';
import './CreativeHubGalleryManager.scss';

const CreativeHubGalleryManager = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [newItem, setNewItem] = useState({
        title: '',
        artist: '',
        medium: '',
        type: 'image',
        src: ''
    });

    useEffect(() => {
        loadGalleryItems();
    }, []);

    const loadGalleryItems = () => {
        const saved = localStorage.getItem('creativeHubGallery');
        if (saved) {
            setGalleryItems(JSON.parse(saved));
        }
    };

    const saveGalleryItems = (items) => {
        localStorage.setItem('creativeHubGallery', JSON.stringify(items));
        setGalleryItems(items);
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItem.title && newItem.artist && newItem.src) {
            const updatedItems = [...galleryItems, {
                ...newItem,
                id: Date.now()
            }];
            saveGalleryItems(updatedItems);
            setNewItem({ title: '', artist: '', medium: '', type: 'image', src: '' });
        }
    };

    const handleDeleteItem = (id) => {
        if (confirm('Are you sure you want to delete this artwork?')) {
            const updatedItems = galleryItems.filter(item => item.id !== id);
            saveGalleryItems(updatedItems);
        }
    };

    return (
        <div className="creative-hub-gallery-manager">
            <div className="manager-header">
                <h2>Creative Hub Gallery Manager</h2>
                <p>Manage artworks displayed in the Creative Hub Gallery</p>
            </div>

            <div className="add-item-section">
                <h3>Add New Artwork</h3>
                <form onSubmit={handleAddItem} className="add-form">
                    <input
                        type="text"
                        placeholder="Artwork Title"
                        value={newItem.title}
                        onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Artist Name"
                        value={newItem.artist}
                        onChange={(e) => setNewItem({...newItem, artist: e.target.value})}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Medium (e.g., Oil Painting, Digital Art)"
                        value={newItem.medium}
                        onChange={(e) => setNewItem({...newItem, medium: e.target.value})}
                    />
                    <select
                        value={newItem.type}
                        onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                    >
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>
                    <input
                        type="url"
                        placeholder="Image/Video URL"
                        value={newItem.src}
                        onChange={(e) => setNewItem({...newItem, src: e.target.value})}
                        required
                    />
                    <button type="submit">Add Artwork</button>
                </form>
            </div>

            <div className="gallery-items-section">
                <h3>Current Gallery Items ({galleryItems.length})</h3>
                {galleryItems.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">🎨</div>
                        <p>No artworks in the gallery yet. Add some to get started!</p>
                    </div>
                ) : (
                    <div className="items-grid">
                        {galleryItems.map(item => (
                            <div key={item.id} className="gallery-item-card">
                                <div className="item-preview">
                                    {item.type === 'video' ? (
                                        <video className="preview-media">
                                            <source src={item.src} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img 
                                            src={item.src} 
                                            alt={item.title}
                                            className="preview-media"
                                            onError={(e) => {
                                                e.target.src = `https://picsum.photos/200/150?random=${item.id}`;
                                            }}
                                        />
                                    )}
                                    <div className="type-badge">{item.type}</div>
                                </div>
                                <div className="item-details">
                                    <h4>"{item.title}"</h4>
                                    <p className="artist">by {item.artist}</p>
                                    <p className="medium">{item.medium}</p>
                                    <div className="item-actions">
                                        <button 
                                            onClick={() => handleDeleteItem(item.id)}
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreativeHubGalleryManager;