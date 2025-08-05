import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Marquee from '../components/Marquee'
import Info from '../components/Info'
import Block from '../components/Block'
import Worked from '../components/Worked'
import Footer from '../components/Footer'


function Home() {



  return (
    <div className=' w-full'>
     <Navbar />
     <LandingPage />
     <Marquee />
     <Info />
     <Block />
     <Worked />
     <Footer /> 
    </div>
  )
}

export default Home
