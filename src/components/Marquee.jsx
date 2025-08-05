import { motion } from 'framer-motion'
import React from 'react'
// import { motion } from 'framer-motion'

const Marquee = () => {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#747A56] rounded-t-[1.5vw] text-[#ffffff]'>
      <div className='text border-t-1 border-b-1 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x: 0}} animate={{x: "-110%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10}} className='text-[25vw]  font-founder uppercase -mt-38 -mb-[8vw] pl-10'>make tech logic</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-110%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10}} className='text-[25vw]  font-founder uppercase -mt-38 -mb-[8vw] pl-10'>make tech logic</motion.h1>
      </div>
    </div>
  ) 
}

export default Marquee
