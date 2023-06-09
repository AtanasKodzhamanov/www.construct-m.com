import React, { useRef, useState, useEffect } from 'react'
import { animated, useSpring, config } from 'react-spring'
import styles from './Page.module.css'
import background from '../Assets/construction-background.jpg'
import { useLocation } from 'react-router-dom'
import useGoogleAnalytics from './useGoogleAnalytics'
import Header from './Header'

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

const Construction = () => {
  useGoogleAnalytics()

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
        <Header />
        <div className={styles.subSections}>
          <div id="management" className={styles.element}>
            <section ref={ref1} className={`${styles.sectionContainer}`}>
              <animated.div className={styles.sectionContent} style={animation1}>
                <h1 className={styles.sectionTitle}>Management</h1>
                <p className={styles.sectionText}>
                  Directing and control of the project from idea to completion and hand-over.
                </p>
              </animated.div>
            </section>
          </div>
          <div id="works" className={styles.element}>
            <section ref={ref2} className={`${styles.sectionContainer} ${styles.sectionContainerRight}`}>
              <animated.div className={styles.sectionContent} style={animation2}>
                <h1 className={styles.sectionTitle}>Works</h1>
                <p className={styles.sectionText}>
                  Execution ot the construction works - site preparation, structural works, roofings, facades, finishes.
                </p>
              </animated.div>
            </section>
          </div>
          <div id="supervision" className={styles.element}>
            <section ref={ref3} className={`${styles.sectionContainer}`}>
              <animated.div className={styles.sectionContent} style={animation3}>
                <h1 className={styles.sectionTitle}>Supervision</h1>
                <p className={styles.sectionText}>
                  Shared on-site supervision, as and where is required over the construction works.
                </p>
              </animated.div>
            </section>
          </div>
        </div>
      </animated.div>
    </>
  )
}

export default Construction
