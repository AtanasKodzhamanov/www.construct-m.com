import React from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [activeLink, setActiveLink] = useState('/')
  const location = useLocation()
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    let navStatus = !navOpen
    setNavOpen(navStatus)

    // Get the sidenav element
    let sidenav = document.getElementById('mySidenav')

    if (navStatus) {
      // Open the sidenav
      sidenav.style.width = '100%'
    } else {
      // Close the sidenav
      sidenav.style.width = '0'
    }
  }

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <Link to="/">
          <h1>CONSTRUCT-M</h1>
        </Link>
      </div>

      <div id="hamburger-icon" class={styles.hamburgerIcon} onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} size="lg" style={{ color: 'white' }} />
      </div>

      <div id="mySidenav" className={styles.sideNav}>
        <div className={styles.studiesSection}>
          <Link
            className={activeLink === '/studies' ? styles.active : styles.inactive}
            to="/studies#preliminary"
          >
            <h3>STUDIES</h3>
          </Link>
        </div>
        <div className={styles.designSection}>
          <Link
            className={activeLink === '/design' ? styles.active : ''}
            to="/design#concept"
          >
            <h3>DESIGN</h3>
          </Link>
        </div>
        <div className={styles.constructionSection}>
          <Link
            className={activeLink === '/construction' ? styles.active : ''}
            to="/construction#management"
          >
            <h3>CONSTRUCTION</h3>
          </Link>
        </div>
        <div className={styles.aboutSection}>
          <Link
            className={activeLink === '/about' ? styles.active : ''}
            to="/about#team"
          >
            <h3>CONTACT</h3>
          </Link>
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.studiesSection}>
          <Link
            className={activeLink === '/studies' ? styles.active : styles.inactive}
            to="/studies#preliminary"
          >
            <h3>STUDIES</h3>
          </Link>
          <div className={styles.scrollLinks}>
            <Link className={styles.scrollTrigger} to="/studies#preliminary">
              <h4>Preliminary</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/studies#real-estate">
              <h4>Real Estate</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/studies#spatial-consulting">
              <h4>Spatial Consulting</h4>
            </Link>
          </div>
        </div>
        <div className={styles.designSection}>
          <Link
            className={activeLink === '/design' ? styles.active : ''}
            to="/design#concept"
          >
            <h3>DESIGN</h3>
          </Link>
          <div className={styles.scrollLinks}>
            <Link className={styles.scrollTrigger} to="/design#concept">
              <h4>Concept</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/design#technical">
              <h4>Technical</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/design#interior">
              <h4>Interior</h4>
            </Link>
          </div>
        </div>
        <div className={styles.constructionSection}>
          <Link
            className={activeLink === '/construction' ? styles.active : ''}
            to="/construction#management"
          >
            <h3>CONSTRUCTION</h3>
          </Link>
          <div className={styles.scrollLinks}>
            <Link className={styles.scrollTrigger} to="/construction#management">
              <h4>Management</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/construction#works">
              <h4>Works</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/construction#supervision">
              <h4>Supervision</h4>
            </Link>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <Link
            className={activeLink === '/about' ? styles.active : ''}
            to="/about#team"
          >
            <h3>CONTACT</h3>
          </Link>
          <div className={styles.scrollLinks}>
            <Link className={styles.scrollTrigger} to="/about#team">
              <h4>Team</h4>
            </Link>
            <Link className={styles.scrollTrigger} to="/about#experience">
              <h4>Experience</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
