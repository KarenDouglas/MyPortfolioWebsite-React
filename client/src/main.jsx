import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';


// navigation paths and pages
const router = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="resume" element={<ResumePage />} />
    </Route>
  </Routes>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>
);
