import React from 'react'
import './Page.css'
import useGoogleAnalytics from './useGoogleAnalytics'
import Header from './Header'
import ContactUsForm from './ContactUsForm'
import styles from './About.module.css'

const About = () => {
  useGoogleAnalytics()


  return (
    <>
      <div className={styles.about}>
        <Header />
        <ContactUsForm />
      </div>
    </>
  )
}

export default About
