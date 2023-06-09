import './Global.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Studies from './Components/Studies'
import Design from './Components/Design'
import Construction from './Components/Construction'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app-body">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/design" element={<Design />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
