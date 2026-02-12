import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import MainLayout from './components/layout/MainLayout';
import Landing from './pages/main/Landing';
import ParentHome from './pages/main/ParentHome';
import About from './pages/main/About';
import Calendar from './pages/main/Calendar';
import Collaborate from './pages/main/Collaborate';
import ArtHub from './pages/verticals/ArtHub';
import ArtHubOverview from './pages/verticals/art-hub/ArtHubOverview';
import ArtHubClasses from './pages/verticals/art-hub/ArtHubClasses';
import ArtHubFaculty from './pages/verticals/art-hub/ArtHubFaculty';
import ArtHubTimetable from './pages/verticals/art-hub/ArtHubTimetable';
import ArtHubEnroll from './pages/verticals/art-hub/ArtHubEnroll';
import MovementEpics from './pages/verticals/MovementEpics';
import MovementEpicsCurriculum from './pages/verticals/movement-epics/MovementEpicsCurriculum';
import MovementEpicsPhilosophy from './pages/verticals/movement-epics/MovementEpicsPhilosophy';
import MovementEpicsModules from './pages/verticals/movement-epics/MovementEpicsModules';
import MovementEpicsInstitutions from './pages/verticals/movement-epics/MovementEpicsInstitutions';
import MovementEpicsApply from './pages/verticals/movement-epics/MovementEpicsApply';
import YogaTTC from './pages/verticals/YogaTTC';
import YogaTTCProgram from './pages/verticals/yoga-ttc/YogaTTCProgram';
import { YogaTTCCertification, YogaTTCFaculty, YogaTTCEligibility, YogaTTCRegister } from './pages/verticals/yoga-ttc/YogaTTCSubPages';
import CreativeHub from './pages/verticals/creative-hub/CreativeHub';
import CreativeHubResidency from './pages/verticals/creative-hub/CreativeHubResidency';
import CreativeHubCollaborations from './pages/verticals/creative-hub/CreativeHubCollaborations';
import CreativeHubStudioSpace from './pages/verticals/creative-hub/CreativeHubStudioSpace';
import CreativeHubGallery from './pages/verticals/creative-hub/CreativeHubGallery';
import CreativeHubConnect from './pages/verticals/creative-hub/CreativeHubConnect';
import Events from './pages/verticals/events/Events';
import EventsServices from './pages/verticals/events/EventsServices';
import EventsPastEvents from './pages/verticals/events/EventsPastEvents';
import EventsArtists from './pages/verticals/events/EventsArtists';
import EventsClients from './pages/verticals/events/EventsClients';
import EventsBookUs from './pages/verticals/events/EventsBookUs';
import Contact from './pages/main/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import './styles/main.scss';

function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<ParentHome />} />
            <Route path="art-hub" element={<ArtHub />} />
            <Route path="art-hub/overview" element={<ArtHubOverview />} />
            <Route path="art-hub/classes" element={<ArtHubClasses />} />
            <Route path="art-hub/faculty" element={<ArtHubFaculty />} />
            <Route path="art-hub/timetable" element={<ArtHubTimetable />} />
            <Route path="art-hub/enroll" element={<ArtHubEnroll />} />
            <Route path="movement-epics" element={<MovementEpics />} />
            <Route path="movement-epics/curriculum" element={<MovementEpicsCurriculum />} />
            <Route path="movement-epics/philosophy" element={<MovementEpicsPhilosophy />} />
            <Route path="movement-epics/modules" element={<MovementEpicsModules />} />
            <Route path="movement-epics/institutions" element={<MovementEpicsInstitutions />} />
            <Route path="movement-epics/apply" element={<MovementEpicsApply />} />
            <Route path="yoga-ttc" element={<YogaTTC />} />
            <Route path="yoga-ttc/program" element={<YogaTTCProgram />} />
            <Route path="yoga-ttc/certification" element={<YogaTTCCertification />} />
            <Route path="yoga-ttc/faculty" element={<YogaTTCFaculty />} />
            <Route path="yoga-ttc/eligibility" element={<YogaTTCEligibility />} />
            <Route path="yoga-ttc/register" element={<YogaTTCRegister />} />
            <Route path="creative-hub" element={<CreativeHub />} />
            <Route path="creative-hub/residency" element={<CreativeHubResidency />} />
            <Route path="creative-hub/collaborations" element={<CreativeHubCollaborations />} />
            <Route path="creative-hub/studio-space" element={<CreativeHubStudioSpace />} />
            <Route path="creative-hub/gallery" element={<CreativeHubGallery />} />
            <Route path="creative-hub/connect" element={<CreativeHubConnect />} />
            <Route path="events-entertainment" element={<Events />} />
            <Route path="events-entertainment/services" element={<EventsServices />} />
            <Route path="events-entertainment/past-events" element={<EventsPastEvents />} />
            <Route path="events-entertainment/artists" element={<EventsArtists />} />
            <Route path="events-entertainment/clients" element={<EventsClients />} />
            <Route path="events-entertainment/book-us" element={<EventsBookUs />} />

            {/* Fallback or other global pages */}
            <Route path="about" element={<About />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="collaborate" element={<Collaborate />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
