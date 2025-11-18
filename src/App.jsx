import { useState, useEffect } from 'react'
import Nav from './Component/Navigation'
import Hero from './Component/Hero'
import About from './Component/About'
import Skill from './Component/Skill'
import Service from './Component/Service'
import Doing from './Component/Doing'
import Footer from './Component/Footer'
import DarkModeButton from './Component/DarkModeButton'
import Card from './Component/ProjectCard'
import Contact from './Component/Contact'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <Service/>
      <Card/>
      <Doing/>
      <Contact/>
      <Footer/>

      <DarkModeButton/>

    </>
  )
}

export default App
