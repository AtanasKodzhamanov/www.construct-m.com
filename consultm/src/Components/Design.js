import React, { useRef, useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import './Page.css';
import background from '../Assets/shard.jpg';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics from './useGoogleAnalytics';

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

const Design = () => {
    useGoogleAnalytics();

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
        <animated.div
            className="parallax-container"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="sub-sections">
                <div id="concept" className="element">
                    <section ref={ref1} className="section-container">
                        <animated.div className="section-content" style={animation1}>
                            <h1 className="section-title">Concept Section</h1>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                            </p>
                        </animated.div>
                    </section>
                </div>
                <div id="technical" className="element">
                    <section ref={ref2} className="section-container right">
                        <animated.div className="section-content" style={animation2}>
                            <h1 className="section-title">Technical Section</h1>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                            </p>
                        </animated.div>
                    </section>
                </div>
                <div id="interior" className="element">
                    <section ref={ref3} className="section-container">
                        <animated.div className="section-content" style={animation3}>
                            <h1 className="section-title">Interior Section</h1>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                            </p>
                        </animated.div>
                    </section>
                </div>
            </div>

        </animated.div>
    );
};

export default Design;
