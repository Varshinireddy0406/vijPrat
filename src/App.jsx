import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Pricing  from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import StatsSection from './components/StatsSection'
import Carousel from './components/Carousel'
import Contact from './components/Contact'






const App = () => {

  return (

    
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <StatsSection/>
      <Carousel/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>

  
    </>
    
  )
}

export default App