import React from 'react';
import './About.css';
import useGoogleAnalytics from './useGoogleAnalytics';

const About = () => {
    useGoogleAnalytics();

    return (
        <div>
            About
        </div>
    );
};

export default About;
