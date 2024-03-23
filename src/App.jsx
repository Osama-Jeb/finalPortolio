
import AnimatedCursor from 'react-animated-cursor'
import './App.css'
import Hero from './sections/hero/Hero'
import Navbar from './sections/navbar/Navbar'
import CanvasBackground from './CanvasBackground'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'

function App() {

  return (
    <>
      <CanvasBackground />
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color='255, 165, 79'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'button',
          '.link'
        ]}
        outerStyle={{
          border: '3px solid #FFA54F',
        }}
        trailingSpeed={5}

      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default App
