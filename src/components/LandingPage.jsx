import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'

const LandingPage = () => {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-[#E9E1D4] pt-5'>
      <div className='textstructure mt-40 px-10 text-[#4E5873] '>
        {["We help", "Vision take", "root and rise"].map((text, index) => {
            return ( 
              <div key={index} className='masker overflow-hidden'>
                <div className='w-fit flex'>
                {index === 1 && ( 
                  <motion.div 
                  initial={{width:0}} 
                  animate={{width: "8vw"}} 
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 1 }}  
                  className='w-[8vw] h-[5vw] bg-red-400 relative rounded-full mr-3 mt-[0.8vw] overflow-hidden'> <img className='w-full h-full object-cover object-top-[1%]' src="https://images.unsplash.com/photo-1751704549146-6cae1f348143?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
                )}
                <h1 key={index} className='text-[8vw] uppercase font-[500] tracking-tight font-founder leading-[5.9vw]'>
                  {text}
                </h1>
                </div>
              </div> 
          );
        })}
        
       
      </div>
      <div className='border-t-1 border-zinc-500 mt-30 font-new flex justify-between items-center px-10 py-5 text-[#4E5873]'>
        {["Your brand has a story —", "we help it speak"].map((text, index) => (
          <p key={index} className='text-md font-light'>{text}</p>
        ))}
        <div className='start flex items-center gap-2'>
          <div className='py-2 px-4 border-1 rounded-full font-light border-zinc-600 uppercase text-sm'>start your journey</div>
          <div className='w-9 h-9 flex items-center justify-center border-1 border-zinc-600 p-2 rounded-full '><MdArrowOutward /></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage