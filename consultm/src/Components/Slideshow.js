import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import the CSS file for styling

const Slideshow = ({ slides, interval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [slides.length, interval]);

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <img
                    className={`slideshow-image ${index === currentSlide ? 'active' : ''}`}
                    src={slide}
                    alt="Slide"
                    key={index}
                />
            ))}
        </div>
    );
};

export default Slideshow;
