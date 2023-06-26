import React, { useRef, useState, useEffect } from 'react'
import { animated, useSpring, config } from 'react-spring'
import styles from './Page.module.css'
import background from '../Assets/shard.jpg'
import { useLocation } from 'react-router-dom'
import useGoogleAnalytics from './useGoogleAnalytics'
import model from '../Assets/cottage_fbx.fbx'
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three-stdlib'
import { OrbitControls } from '@react-three/drei'
import Header from './Header'

const Model = () => {
  const fbx = useLoader(FBXLoader, model)
  return <primitive object={fbx} scale={0.0015} />
}

const useInView = (ref) => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.6 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref])

  return inView
}

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}

const Design = () => {
  useGoogleAnalytics()

  const webglSupport = webglAvailable()

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  const inView1 = useInView(ref1)
  const inView2 = useInView(ref2)
  const inView3 = useInView(ref3)

  const animation1 = useSpring({
    opacity: inView1 ? 1 : 0,
    config: config.slow,
  })
  const animation2 = useSpring({
    opacity: inView2 ? 1 : 0,
    config: config.slow,
  })
  const animation3 = useSpring({
    opacity: inView3 ? 1 : 0,
    config: config.slow,
  })

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <animated.div
        className={styles.parallaxContainer}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className={styles.subSections}>
          <Header />

          <div id="concept" className={styles.element}>
            <section ref={ref1} className={`${styles.sectionContainer}`}>
              <animated.div className={styles.sectionContent} style={animation1}>
                <h1 className={styles.sectionTitle}>Concept</h1>
                <p className={styles.sectionText}>
                  The scope and content of the conceptual design are essential for the selection of the architectural-spatial solution, structural solution, installation and technological solutions, safety systems and more as required by the design contract.
                </p>
              </animated.div>
              <div
                className={styles.canvasContainer}
              >
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
          <div id="technical" className={styles.element}>
            <section ref={ref2} className={`${styles.sectionContainer} ${styles.sectionContainerRight}`}>
              <animated.div className={styles.sectionContent} style={animation2}>
                <h1 className={styles.sectionTitle}>Technical</h1>
                <p className={styles.sectionText}>
                  The technical design clarifies and complements the conceptual design as well as develops the assessment of compliance with the requirements for the structures, serves as a basis for the building permit issue and execution of the works until completion of the project.
                </p>
              </animated.div>
            </section>
          </div>
          <div id="interior" className={styles.element}>
            <section ref={ref3} className={`${styles.sectionContainer}`}>
              <animated.div className={styles.sectionContent} style={animation3}>
                <h1 className={styles.sectionTitle}>Interior</h1>
                <p className={styles.sectionText}>
                  Creating healthier environment, planned and organized to suit the available space as well as the preferred design and aesthetics.
                </p>
              </animated.div>
            </section>
          </div>
        </div>
      </animated.div>
    </>
  )
}

export default Design
