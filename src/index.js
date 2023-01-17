import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from './pages/Home.js';
import Portfolio from "./pages/Portfolio.js";
import ContactMe from "./pages/ContactMe.js";
import NoPage from "./pages/NoPage.js";
import ProjectCard from './components/ProjectCard';
import logo from './assets/ChrisMaloneDevLogoSmall.png';
import './App.css';

export default function App() {
  const [darkToggle, setDarkToggle] = React.useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact-me" element={<ContactMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);