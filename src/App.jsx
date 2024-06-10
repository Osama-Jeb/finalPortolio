
import './App.css'
import AnimatedCursor from 'react-animated-cursor'
import Hero from './sections/hero/Hero'
import Navbar from './sections/navbar/Navbar'
import CanvasBackground from './CanvasBackground'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'
import Skills from './sections/skills/Skills'
import Loading from './Loading'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect, useState } from 'react'
import Facts from './sections/facts/Facts'


function App() {

  const [theme, setTheme] = useState('black');

  return (
    <>
    <div data-theme={theme} className='text-base-content'>
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
      <Navbar setTheme={setTheme}/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Facts /> */}
      <Contact />
    </div>
      <SpeedInsights />
    </>
  )
}

export default App
