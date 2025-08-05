import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    motion
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full  bg-[#4D5B75] py-20 text-[#C9CBCE]'>
        <div className='heading leading-13 border-b-[0.1px] border-[#C9CBCE] pb-15'>
            <h1 className='text-[3.5vw] font-new px-10 w-[86%] font-light tracking-tight leading-12'>Matelo is a technology partner for ambitious brands, helping them build smarter products, scale faster, and solve real-world problems with design, strategy, and code.</h1>
        </div>
        <div className='about border-b-[0.1px] border-[#C9CBCE] pb-15 font-new'>
            <div className='about-details py-10 px-10 flex justify-between    '>
                <p className=''>What you can expect:</p>
            <div className='flex gap-[10vw]'>
                <div className='paragraph'>
                    <p className='w-70 mb-10'>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>
                <p className='w-70'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='socialmedia flex flex-col justify-end mr-[15vw]'>
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Linkedin</a>
                <a>Behance</a>
            </div>
            </div>
            
            </div>
        </div>
        <div className='approch w-full px-10 pt-10 flex '>
            <div className='w-1/2'>
                <h1 className='text-[4vw] font-new'>Our approach</h1>
                <button className='px-8 py-4 mt-8 bg-[#C9CBCE] text-[#4E5873] rounded-full font-light text-sm uppercase flex gap-8 items-center'>Read More
                    <div className='w-2 h-2 bg-[#4E5873] rounded-full'></div>
                </button>
            </div>
            <div className='Profile-photo w-1/2 h-[50vh] bg-[#C9CBCE] rounded-lg overflow-hidden relative'>
                <motion.img className='h-full w-full object-cover' src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdweGZoaHRlMzJ5Nnh6cG40Y25mbGg2NWNoNHZ0aDQxNXJla3JicCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pRO2RV0DMnEdQZhcg1/giphy.gif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
