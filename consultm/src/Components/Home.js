import React from 'react';
import './Home.css';
import useGoogleAnalytics from './useGoogleAnalytics';
import Slideshow from './Slideshow';

const Home = () => {
    useGoogleAnalytics();

    const slides = [
        'https://i.etsystatic.com/20176948/r/il/130f6b/4892745686/il_1588xN.4892745686_2a0s.jpg',
        'https://i.etsystatic.com/20176948/r/il/b12d07/4941008161/il_794xN.4941008161_x0pz.jpg',
        'https://i.etsystatic.com/20176948/r/il/566166/4974757951/il_794xN.4974757951_f4ge.jpg',
    ];

    return (
        <div className="home-container">
            <div className="slideshow-container">
                <Slideshow slides={slides} interval={2000} />
            </div>
            <div className="promo-text">
                <p>At Construct-M, we understand that every project is unique and requires a customized approach. That's why we work closely with our clients to understand their specific needs and objectives, and develop tailor-made solutions that deliver results.
                </p><p>Whether you need help with a complex engineering challenge or require support for a new product launch, we have the skills and knowledge to deliver exceptional results.</p>
            </div>
        </div>
    );
};

export default Home;
