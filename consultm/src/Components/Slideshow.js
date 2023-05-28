import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ slides, interval = 2000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setNextSlide((prevSlide) => (prevSlide + 2) % slides.length);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [slides.length, interval]);

    return (
        <>
            {slides.map((slide, index) => (
                <div
                    className={`slideshow-image-container ${index === currentSlide ? 'active' : ''}`}
                    key={index}
                >
                    <img
                        className="slideshow-image"
                        src={slide}
                        alt="Slide"
                    />
                    <img
                        className="slideshow-image"
                        src={slides[(index + 1) % slides.length]}
                        alt="Slide"
                    />
                    <img
                        className="slideshow-image"
                        src={slides[(index + 2) % slides.length]}
                        alt="Slide"
                    />
                </div>
            ))}
        </>
    );
};

export default Slideshow;
