import React, { useState, useEffect } from 'react'
import './Home.css'
import useGoogleAnalytics from './useGoogleAnalytics'
import Slideshow from './Slideshow'
import Header from './Header'
const Home = () => {
  useGoogleAnalytics()
  const [images, setImages] = useState(3)

  const updateImagesCount = () => {
    if (window.innerWidth >= 1200) {
      setImages(3)
    } else if (window.innerWidth > 800) {
      setImages(2)
    } else {
      setImages(1)
    }
  }

  useEffect(() => {
    // Call the function right after the component mounts
    updateImagesCount()

    // Call the function whenever the window resizes
    window.addEventListener('resize', updateImagesCount)

    return () => {
      window.removeEventListener('resize', updateImagesCount)
    }
  }, [])

  const slides = [
    'https://www.countycouncilsnetwork.org.uk/wp-content/uploads/Construction-site-1.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Construction_in_Toronto_May_2012.jpg',
    'https://www.clearb2b.com/_assets/images/industries_bg_building_construction.jpg',
    'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/24/861879-builders-thinkstock.jpg',
    'https://dienamics.com.au/wp-content/uploads/2018/11/Building.jpg',
  ]

  return (
    <div className="home-container">
      <Header />
      <div className="slideshow-container">
        <Slideshow slides={slides} interval={4000} images={images} />
      </div>
      <div className="bottom-text-container">
        <div className="promo-text">
          <p>
            We are happy to help with your real estate, design or construction project - contact us for more information.
          </p>
        </div>
        <div className="promo-text">
          <p>
            You can rely on a team with more than 10 years of experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
