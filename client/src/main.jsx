import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import './css/resets.css';
import './css/index.css';

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

ReactDOM.render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>,
  document.getElementById('root')
);
