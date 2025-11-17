import { useState, useEffect } from 'react'
import Nav from './Component/Navigation'
import Hero from './Component/Hero'
import About from './Component/About'
import Skill from './Component/Skill'
import Service from './Component/Service'
import Projects from './Component/filed'
import Doing from './Component/Doing'
import Prizing from './Component/Prizing'
import Footer from './Component/Footer'
import Slider from './Component/Project'
import DarkModeButton from './Component/DarkModeButton'
import Card from './Component/ProjectCard'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <Service/>
      {/* <Slider/> */}
      {/* <Projects/> */}
      <Card/>
      <Doing/>
      <Prizing/>
      <Footer/>

      <DarkModeButton/>

    </>
  )
}

export default App
