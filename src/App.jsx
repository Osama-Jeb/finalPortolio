import './App.css'

import { SpeedInsights } from "@vercel/speed-insights/react"
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import SingleProject from './pages/singleProject'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<SingleProject />} />
      </Routes>
      <SpeedInsights />

    </>
  )
}

export default App
