import { useState } from 'react'
import Nav from './Component/Navigation'
import Hero from './Component/Hero'
import About from './Component/About'
import Skill from './Component/Skill'
import Service from './Component/Service'
import Projects from './Component/Project'
import Doing from './Component/Doing'
import Prizing from './Component/Prizing'
import Footer from './Component/Footer'
// import Projects from './Component/tes'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <Service/>
      {/* <Projects/> */}
      <Doing/>
      <Prizing/>
      <Footer/>
    </>
  )
}

export default App
