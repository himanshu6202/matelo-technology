import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Connect from './pages/Connect';


function App() {

const locomotiveScroll = new LocomotiveScroll();
locomotiveScroll


  return (
    <>
     <div className=' bg-[#E9E1D4]'>
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/connect' element={<Connect />} />
      </Routes>
     </div>
    </>
  )
}

export default App
