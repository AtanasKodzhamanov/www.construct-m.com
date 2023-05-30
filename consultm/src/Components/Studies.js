import React, { useRef, useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import './Page.css';
import background from '../Assets/shard.jpg';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics from './useGoogleAnalytics';
import Slideshow from './Slideshow';
import Header from './Header';


const useInView = (ref) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.6 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);


    return inView;
};



const Studies = () => {
    useGoogleAnalytics();

    const slides = [
        'https://i.etsystatic.com/20176948/r/il/130f6b/4892745686/il_1588xN.4892745686_2a0s.jpg',
        'https://i.etsystatic.com/20176948/r/il/b12d07/4941008161/il_794xN.4941008161_x0pz.jpg',
        'https://i.etsystatic.com/20176948/r/il/566166/4974757951/il_794xN.4974757951_f4ge.jpg',
    ];

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);

    const animation1 = useSpring({ opacity: inView1 ? 1 : 0, config: config.slow });
    const animation2 = useSpring({ opacity: inView2 ? 1 : 0, config: config.slow });
    const animation3 = useSpring({ opacity: inView3 ? 1 : 0, config: config.slow });

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <animated.div
                className="parallax-container"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <div className="sub-sections">
                    <div id="preliminary" className="element">
                        <section ref={ref1} className="section-container">
                            <animated.div className="section-content" style={animation1}>
                                <h1 className="section-title">Preliminary Section</h1>
                                <p className="section-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                    tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                    euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                    ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                                </p>
                            </animated.div>
                            <div className="slideshow-container">
                                <Slideshow slides={slides} interval={4000} images={1} />
                            </div>
                        </section>

                    </div>
                    <div id="real-estate" className="element">
                        <section ref={ref2} className="section-container right">
                            <div className="slideshow-container">
                                <Slideshow slides={slides} interval={4000} images={1} />
                            </div>
                            <animated.div className="section-content" style={animation2}>
                                <h1 className="section-title">Real Estate Section</h1>
                                <p className="section-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                    tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                    euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                    ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                                </p>
                            </animated.div>
                        </section>
                    </div>
                    <div id="spatial-consulting" className="element">
                        <section ref={ref3} className="section-container">
                            <animated.div className="section-content" style={animation3}>
                                <h1 className="section-title">Spatial Consulting Section</h1>
                                <p className="section-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                    tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                    euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                    ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                                </p>
                            </animated.div>
                            <div className="slideshow-container">
                                <Slideshow slides={slides} interval={4000} images={1} />
                            </div>
                        </section>
                    </div>
                </div>

            </animated.div>
        </>
    );
};

export default Studies;
