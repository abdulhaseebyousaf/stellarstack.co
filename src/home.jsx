import React from 'react'
import Hero from './Components/Hero'
import StaffServices from './Components/StaffServices'
import Leading from './Components/Leading'
import About from './Components/About'
import Innovate from './Components/Innovate'
import CaseStudies from './Components/CaseStudies'
import OurTeam from './Components/OurTeam'
import GetIn from './Components/GetIn'
import Testimonials from './Components/Testimonials'


function home() {
  return (
    <>
      <Hero />
      <StaffServices />
      <Leading />
      <About />
      <Innovate />
      <Testimonials />
      <CaseStudies />
      <OurTeam />
      <GetIn />
    </>
  )
}

export default home
