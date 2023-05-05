import './App.css';
import Header from './Components/Header';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Studies from './Components/Studies';
import Design from './Components/Design';
import Construction from './Components/Construction';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function App() {


  const [activeLink, setActiveLink] = useState('/');
  const [prevPath, setPrevPath] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    setPrevPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const header = document.querySelector('.content');
    if (prevPath !== location.pathname) {
      header.classList.add('fade-out');
      setTimeout(() => {
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
      }, 300);
      setTimeout(() => {
        header.classList.remove('fade-in');
      }, 600);
    }
  }, [prevPath, location.pathname]);

  return (
    <div className="app-body">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/design" element={<Design />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
