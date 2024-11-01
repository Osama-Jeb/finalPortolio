import './App.css'
import { useState } from 'react'

import AnimatedCursor from 'react-animated-cursor'
import Hero from './sections/hero/Hero'
import Navbar from './sections/navbar/Navbar'
import CanvasBackground from './components/CanvasBackground'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'
import Skills from './sections/skills/Skills'

import Loading from './components/Loading'
import Facts from './sections/facts/Facts'

import { SpeedInsights } from "@vercel/speed-insights/react"
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import SingleProject from './pages/singleProject'



function App() {
  const [theme, setTheme] = useState('black');

  return (
    <>
      {/* <div data-theme={theme} className='text-base-content'>
        <Loading />
        <CanvasBackground />

        <div className='sm:block hidden'>
          <AnimatedCursor
            innerSize={8}
            outerSize={42}
            color='255, 165, 79'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            clickables={[
              'a',
              'button',
              '.link',
              'label',
              'span',
              'li'
            ]}
            outerStyle={{
              border: '1px solid #FFA54F',
            }}
            trailingSpeed={5}
          />
        </div>
        <Navbar setTheme={setTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Facts />
        <Contact />
      </div> */}

      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<SingleProject />} />
      </Routes>
      <SpeedInsights />

    </>
  )
}

export default App
