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
                <Slideshow slides={slides} interval={4000} />
            </div>
            <div className="bottom-text-container">
                <div className="promo-text">
                    <p>We are readily available to help with your current or future real estate or constructuon investment.</p>
                </div>
                <div className="promo-text">
                    <p>You can rely on a team with more than 10 years of experience of each member.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
