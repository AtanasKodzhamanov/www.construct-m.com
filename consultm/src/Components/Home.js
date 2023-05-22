import React from 'react';
import './Home.css';
import useGoogleAnalytics from './useGoogleAnalytics';

const Home = () => {
    useGoogleAnalytics();

    return (
        <div className="home-container">
            <div className="slideshow-container">
                <div className="slideshow">
                    Slideshow placeholder
                </div>
            </div>
            <div className="promo-text">
                <p>At Construct-M, we understand that every project is unique and requires a customized approach. That's why we work closely with our clients to understand their specific needs and objectives, and develop tailor-made solutions that deliver results.
                </p><p>Whether you need help with a complex engineering challenge or require support for a new product launch, we have the skills and knowledge to deliver exceptional results.</p>
            </div>
        </div>
    );
};

export default Home;
