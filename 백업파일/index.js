import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import App from './App';
import './index.css';
import ServicePage from './ProjectReact/ServiceCenter';
import TwitterPage from './ProjectReact/Twitter';
import InfoPage from './ProjectReact/Info';
import LoginPage from './ProjectReact/LoginPage';
import SignUpPage from './ProjectReact/SignUpPage';
import AdminPage from './ProjectReact/AdminPage';
import LoginCompletePage from './LoginCompletePage';
import Spain from './ProjectReact/Spain';
import Slider from './ProjectReact/SimpleSlider';

import Navbar from "./ProjectReact/components/Footer"
import Footer from "./ProjectReact/components/Navbar"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/complete" element={<LoginCompletePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/twitter" element={<TwitterPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path='/spain' element={<Spain />} />
            <Route path='/slider' element={<Slider />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}