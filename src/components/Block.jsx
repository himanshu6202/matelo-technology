import { motion } from 'framer-motion'
import React from 'react'

function Block() {
  motion
    
  return (
    <div  className=' w-full h-screen font-new  overflow-hidden relative bg-[#ffff] text-black'>
      <div  className='text-container flex flex-row justify-center items-end gap-35 text-Black pt-35'>
        <div className='text-left text-xs'>
          <h3>(01) Build to scale,</h3>
          <h3>powered by data.</h3>
        </div>
        <div className='leading-4 flex items-center justify-center gap-3 text-m uppercase'>
          <ul className='text-right'>
            <li>We Are</li>
            <li>Matelo</li>
            <li>Make Tech Logic</li>
            <li>Here we Build</li>
            <li>Logic for brands </li>
          </ul>
          <ul className='text-left'>
            <li>We Are</li>
            <li>Matelo</li>
            <li>Make Tech Logic</li>
            <li>Here we Build</li>
            <li>Logic for brands </li>
          </ul>
        </div>
        <div className='text-xs flex flex-col'>
          <h3>(02) We grow brands,</h3>
          <h3>that want more.</h3>
        </div>
      </div>
      <div className='image-container flex justify-evenly mt-[1vw] items-center relative '>
        <h1 className='font-founder text-[10vw] '>WE</h1>
        <div className='w-[30vw] h-[20vw] ml-10'>
           <motion.img drag whileDrag={{scale: 0.9}} dragConstraints={{left: -500, right: 500, top: 0, bottom: 50}} className='object-cover h-full w-full' src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHo0YjM0aG15NDNwb3R0MGF4MWx4anl5cWdieXNjYWI5bWN4eGtzcCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/5q0vuzuV8G1F5KkQR9/giphy.gif" alt="3d render model" />
           <h1 className='text-right uppercase text-[1.4vw] font-semibold mt-4 leading-5'>Matelo Technology <br/> We bring clarity to your marketing——<br/>Fueling Growth Through Digital Ex.</h1>
           <p className='uppercase leading-4 mt-2 text- text-xs text-center'>We focus on delivering digital growth through intelligent strategy, performance-driven campaigns, and data-backed decisions that help businesses scale with confidence and clarity.</p>
        </div>
        <h1 className='text-[10vw] font-founder'>ARE</h1>
      </div>
      

    </div> 
  )
}

export default Block
