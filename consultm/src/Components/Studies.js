import React, { useRef, useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { Element } from 'react-scroll';
import './Studies.css';
import background from '../Assets/shard.jpg';

const useInView = (ref) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.6 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return inView;
};

const Studies = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);

    const animation1 = useSpring({ opacity: inView1 ? 1 : 0, config: config.slow });
    const animation2 = useSpring({ opacity: inView2 ? 1 : 0, config: config.slow });
    const animation3 = useSpring({ opacity: inView3 ? 1 : 0, config: config.slow });

    return (
        <animated.div
            className="parallax-container"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="sub-sections">
                <Element name="preliminary" className="element">
                    <section ref={ref1} className="preliminary">
                        <animated.div className="section-content" style={animation1}>
                            <h1 className="section-title">Preliminary Section</h1>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                            </p>
                        </animated.div>
                    </section>
                </Element>
                <Element name="real-estate" className="element">
                    <section ref={ref2} className="real-estate">
                        <animated.div className="section-content odd" style={animation2}>
                            <h1 className="section-title">Real Estate Section</h1>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                            </p>
                        </animated.div>
                    </section>
                </Element>
                <Element name="spatial-consulting" className="element">
                    <section ref={ref3} className="spatial-consulting">
                        <animated.div className="section-content" style={animation3}>
                            <h1 className="section-title">Spatial Consulting Section</h1>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                                tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl ut nisl. Sed
                                euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis aliquam nunc nisl
                                ut nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl ultrices odio, quis
                            </p>
                        </animated.div>
                    </section>
                </Element>
            </div>
        </animated.div>
    );
};

export default Studies;
