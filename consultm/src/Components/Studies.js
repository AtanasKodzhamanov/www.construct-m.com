import React, { useRef, useState, useEffect } from 'react'
import { animated, useSpring, config } from 'react-spring'
import styles from './Page.module.css'
import background from '../Assets/shard.jpg'
import { useLocation } from 'react-router-dom'
import useGoogleAnalytics from './useGoogleAnalytics'
import Slideshow from './Slideshow'
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

const Studies = () => {
  useGoogleAnalytics()

  const slides1 = [
    'https://dienamics.com.au/wp-content/uploads/2018/11/Building.jpg',
    'http://blogs.kcrw.com/whichwayla/wp-content/uploads/2015/09/DSC02226.jpg',
    'https://pittcc.edu/wp-content/uploads/2018/04/Building-Construction.jpg',
  ]

  const slides2 = [
    'https://www.countycouncilsnetwork.org.uk/wp-content/uploads/Construction-site-1.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Construction_in_Toronto_May_2012.jpg',
    'https://www.clearb2b.com/_assets/images/industries_bg_building_construction.jpg',
    'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/24/861879-builders-thinkstock.jpg',
    'https://dienamics.com.au/wp-content/uploads/2018/11/Building.jpg',
  ]

  const slides3 = [
    'https://www.clearb2b.com/_assets/images/industries_bg_building_construction.jpg',
    'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/24/861879-builders-thinkstock.jpg',
    'https://dienamics.com.au/wp-content/uploads/2018/11/Building.jpg',
  ]

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
        <div id="preliminary" className={styles.element}>
          <section ref={ref1} className={styles.sectionContainer}>
            <animated.div className={styles.sectionContent} style={animation1}>
              <h1 className={styles.sectionTitle}>Preliminary Studies</h1>
              <p className={styles.sectionText}>
                Defines the outlines of future development sites so that they comply with the current urban development plan.
              </p>
            </animated.div>
            <div className={styles.slideshowContainer}>
              <Slideshow slides={slides1} interval={4000} images={1} />
            </div>
          </section>
        </div>
        <div id="real-estate" className={styles.element}>
          <section ref={ref2} className={`${styles.sectionContainer} ${styles.sectionContainerRight}`}>
            <div className={styles.slideshowContainer}>
              <Slideshow slides={slides2} interval={4000} images={1} />
            </div>
            <animated.div className={styles.sectionContent} style={animation2}>
              <h1 className={styles.sectionTitle}>Real Estate</h1>
              <p className={styles.sectionText}>
                Provides you with an integrated solution for the essential communications and engineering networks in the development as well as coordinated due diligange - verification of the chain of ownership, сhecking for encumbrances - mortgages and foreclosures, limited property rights - right of use, easement right, building right, legal disputes with the subject property, owner verification.
              </p>
            </animated.div>
          </section>
        </div>
        <div id="spatial-consulting" className={styles.element}>
          <section ref={ref3} className={styles.sectionContainer}>
            <animated.div className={styles.sectionContent} style={animation3}>
              <h1 className={styles.sectionTitle}>Spatial</h1>
              <p className={styles.sectionText}>
                Assists you in determining the volume of construction within the legally permissible limits - storey heights, spatial solution for individual floors, schematics of facades, basis of landscaping.
              </p>
            </animated.div>
            <div className={styles.slideshowContainer}>
              <Slideshow slides={slides3} interval={4000} images={1} />
            </div>
          </section>
        </div>
      </animated.div>
    </>
  )
}

export default Studies
