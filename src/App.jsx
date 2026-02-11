import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import MainLayout from './components/layout/MainLayout';
import Landing from './pages/parent/Landing';
import ParentHome from './pages/parent/ParentHome';
import About from './pages/parent/About';
import ArtHub from './pages/verticals/ArtHub';
import MovementEpics from './pages/verticals/MovementEpics';
import YogaTTC from './pages/verticals/YogaTTC';
import CreativeHub from './pages/verticals/CreativeHub';
import Events from './pages/verticals/Events';
import Contact from './pages/parent/Contact';
import AdminPanel from './pages/admin/AdminPanel';
import AdminButton from './components/admin/AdminButton';
import './styles/main.scss';

function App() {
  return (
    <AdminProvider>
      <Router>
        <AdminButton />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<ParentHome />} />
            <Route path="art-hub" element={<ArtHub />} />
            <Route path="movement-epics" element={<MovementEpics />} />
            <Route path="yoga-ttc" element={<YogaTTC />} />
            <Route path="creative-hub" element={<CreativeHub />} />
            <Route path="events-entertainment" element={<Events />} />

            {/* Fallback or other global pages */}
            <Route path="about" element={<About />} />
            <Route path="calendar" element={<div className="container section"><h1>Event Calendar</h1></div>} />
            <Route path="collaborate" element={<div className="container section"><h1>Collaborate</h1></div>} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
