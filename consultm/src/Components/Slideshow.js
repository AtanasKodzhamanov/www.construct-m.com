import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

const Slideshow = ({ slides, interval = 2000, images = 1 }) => {
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
    <>
      {slides.map((slide, index) => (
        <div
          className={`${styles['slideshow-image-container']} ${index === currentSlide ? styles['active'] : ''
            }`}
          key={index}
        >
          {[...Array(images)].map((_, i) => (
            <img
              className={styles['slideshow-image']}
              src={slides[(index + i) % slides.length]}
              alt="Slide"
              key={i}
              style={{
                width: `${100 / images}%`,
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Slideshow;
