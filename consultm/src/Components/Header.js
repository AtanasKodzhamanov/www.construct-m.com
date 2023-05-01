import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);


    return (
        <header className="header">
            <div className="header-container">
                <div className="title">
                    <Link className={activeLink === '/studies' ? 'active' : ''} to="/"><h1>CONSTRUCT-M</h1></Link>
                </div>
                <div className="nav">
                    <Link className={activeLink === '/studies' ? 'active' : ''} to="/"><h3>STUDIES</h3></Link>
                    <Link className={activeLink === '/design' ? 'active' : ''} to="/"><h3>DESIGN</h3></Link>
                    <Link className={activeLink === '/construction' ? 'active' : ''} to="/"><h3>CONSTRUCTION</h3></Link>
                    <Link className={activeLink === '/about' ? 'active' : ''} to="/"><h3>ABOUT</h3></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
