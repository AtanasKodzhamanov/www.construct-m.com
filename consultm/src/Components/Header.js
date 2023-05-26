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
                                <h4>Preliminary</h4>
                            </Link>
                            <Link
                                className="scroll-trigger"
                                to="/studies#real-estate"
                            >
                                <h4>Real Estate</h4>
                            </Link>
                            <Link
                                className="scroll-trigger"
                                to="/studies#spatial-consulting"
                            >
                                <h4>Spatial Consulting</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="design-section">
                        <Link className={activeLink === '/design' ? 'active' : ''} to="/design">
                            <h3>DESIGN</h3>
                        </Link>
                        <div className="scroll-links">
                            <Link className="scroll-trigger" to="/design#concept">
                                <h4>Concept</h4>
                            </Link>
                            <Link className="scroll-trigger" to="/design#technical">
                                <h4>Technical</h4>
                            </Link>
                            <Link className="scroll-trigger" to="/design#interior">
                                <h4>Interior</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="construction-section">
                        <Link className={activeLink === '/construction' ? 'active' : ''} to="/construction">
                            <h3>CONSTRUCTION</h3>
                        </Link>
                        <div className="scroll-links">
                            <Link className="scroll-trigger" to="/construction#management">
                                <h4>Management</h4>
                            </Link>
                            <Link className="scroll-trigger" to="/construction#works">
                                <h4>Works</h4>
                            </Link>
                            <Link className="scroll-trigger" to="/construction#supervision">
                                <h4>Supervision</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="about-section">
                        <Link className={activeLink === '/about' ? 'active' : ''} to="/about">
                            <h3>ABOUT</h3>
                        </Link>
                        <div className="scroll-links">
                            <Link className="scroll-trigger" to="/about#team">
                                <h4>Team</h4>
                            </Link>
                            <Link className="scroll-trigger" to="/about#experience">
                                <h4>Experience</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
