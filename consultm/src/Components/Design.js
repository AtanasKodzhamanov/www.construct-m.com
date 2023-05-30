import React, { useRef, useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import './Page.css';
import background from '../Assets/shard.jpg';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics from './useGoogleAnalytics';
import model from '../Assets/cottage_fbx.fbx';
import { Canvas, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";
import Header from './Header';

const Model = () => {
    const fbx = useLoader(FBXLoader, model);
    return <primitive object={fbx} scale={0.0015} />;
};

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


function webglAvailable() {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
}


const Design = () => {
    useGoogleAnalytics();

    const webglSupport = webglAvailable();

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
                            <div style={{ backgroundColor: 'rgba(76, 96, 105, 0.8)', width: '500px', height: '500px' }}>
                                {webglSupport ? (
                                    <Canvas>
                                        <ambientLight />
                                        <pointLight position={[10, 10, 10]} />
                                        <Model />
                                        <OrbitControls />
                                    </Canvas>
                                ) : (
                                    // Fallback content here
                                    <div>
                                        <h1>Sorry, your browser does not support WebGL.</h1>
                                    </div>
                                )}
                            </div>
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
        </>
    );
};

export default Design;
