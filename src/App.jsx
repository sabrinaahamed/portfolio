import React from 'react'
import Nabvar from './components/layouts/Nabvar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/layouts/Footer'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'

const App = () => {
  return (
    <>
      <Nabvar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
  
    </>
  )
}

export default App