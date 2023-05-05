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
                    <Link to="/">
                        <h1>CONSTRUCT-M</h1>
                    </Link>
                </div>
                <div className="nav">
                    <div className="studies-section">
                        <Link className={activeLink === '/studies' ? 'active' : 'inactive'} to="/studies">
                            <h3>STUDIES</h3>
                        </Link>
                        <div className="scroll-links">
                            <Link
                                className="scroll-trigger"
                                to="/studies#preliminary"
                            >
                                Preliminary
                            </Link>
                            <Link
                                className="scroll-trigger"
                                to="/studies#real-estate"
                            >
                                Real Estate
                            </Link>
                            <Link
                                className="scroll-trigger"
                                to="/studies#spatial-consulting"
                            >
                                Spatial Consulting
                            </Link>
                        </div>
                    </div>
                    <Link className={activeLink === '/design' ? 'active' : ''} to="/design">
                        <h3>DESIGN</h3>
                    </Link>
                    <Link className={activeLink === '/construction' ? 'active' : ''} to="/construction">
                        <h3>CONSTRUCTION</h3>
                    </Link>
                    <Link className={activeLink === '/about' ? 'active' : ''} to="/about">
                        <h3>ABOUT</h3>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
