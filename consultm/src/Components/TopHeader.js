import React, { useState } from 'react';
import './TopHeader.css';

const TopHeader = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <header className="top-header">
            <nav className="top-header__nav">
                <ul className="top-header__list">
                    <li className="top-header__item">
                        <a
                            href="#"
                            className="top-header__link"
                            onMouseEnter={() => handleMenu('studies')}
                            onMouseLeave={() => handleMenu(null)}
                        >
                            Studies
                        </a>
                        {activeMenu === 'studies' && (
                            <ul className="top-header__dropdown">
                                <li className="top-header__dropdown-item">
                                    <a href="#">Preliminary</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Real Estate</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Spatial Consulting</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="top-header__item">
                        <a
                            href="#"
                            className="top-header__link"
                            onMouseEnter={() => handleMenu('design')}
                            onMouseLeave={() => handleMenu(null)}
                        >
                            Design
                        </a>
                        {activeMenu === 'design' && (
                            <ul className="top-header__dropdown">
                                <li className="top-header__dropdown-item">
                                    <a href="#">Concept</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Technical</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Interior</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="top-header__item">
                        <a
                            href="#"
                            className="top-header__link"
                            onMouseEnter={() => handleMenu('construction')}
                            onMouseLeave={() => handleMenu(null)}
                        >
                            Construction
                        </a>
                        {activeMenu === 'construction' && (
                            <ul className="top-header__dropdown">
                                <li className="top-header__dropdown-item">
                                    <a href="#">Management</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Works</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Supervision</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="top-header__item">
                        <a
                            href="#"
                            className="top-header__link"
                            onMouseEnter={() => handleMenu('contact')}
                            onMouseLeave={() => handleMenu(null)}
                        >
                            Contact Us
                        </a>
                        {activeMenu === 'contact' && (
                            <ul className="top-header__dropdown">
                                <li className="top-header__dropdown-item">
                                    <a href="#">About</a>
                                </li>
                                <li className="top-header__dropdown-item">
                                    <a href="#">Experience</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default TopHeader;
