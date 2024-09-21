import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const[playState,setPlayState] =useState(false);

  return (
    <div>
      <Navbar/>

      <Hero/>

      <Title subTitle='Our PROGRAM' Title='What we offer'/>
      <div className="container">
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' Title='What student says'/>
      <Testimonials/>

      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <Contact/>
      <Footer></Footer>
      
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
      
    </div>
  )
}

export default App
