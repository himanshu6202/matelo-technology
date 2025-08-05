import React from 'react'   
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {

  return (
    <>
      <Navbar />
     <div className='Information w-full h-screen flex flex-col gap-10 justify-center items-center'>
        <div className='w-[40vw] h-[35vh]'>
          <img className='w-full h-full object-cover object-top' src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmF4dGVicWJ3eDNsMXJ0OWprd2k2dWg2Z3I5dTEzaGExamVrc2RmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RCtKcMeeIlIFskmH7C/giphy.gif" alt="Growing Plant" />
        </div>
        <h1 className='w-300 font-new text-center text-2xl text-[#4E5873]'>Empowering brands with smart marketing,<br/>standout design, and tech that works.</h1>
     </div>
     <div className='w-full p-20 flex justify-between items-baseline-last bg-[#4E5873] font-new'>
      <div className="customer w-[20%]">
        <h1 className='text-6xl text-center pb-2 text-zinc-50'>95%</h1>
        <p className='text-center leading-3.5 text-xs text-zinc-300'>Complete customer<br/>satisfraction</p>
      </div>
      <div className="customer w-[20%]">
        <h1 className='text-6xl text-center pb-2 text-zinc-50'>10+</h1>
        <p className='text-center leading-3.5 text-xs text-zinc-300'>Inovationa and valuable<br/>insight</p>
      </div>
      <div className="customer w-[20%]">
        <h1 className='text-6xl text-center pb-2 text-zinc-50'>100</h1>
        <p className='text-center leading-3.5 text-xs text-zinc-300'>Highly efficient marketing<br/>strategies</p>
      </div>
      <div className="customer w-[20%]">
        <h1 className='text-6xl text-center pb-2 text-zinc-50'>20</h1>
        <p className='text-center leading-3.5 text-xs text-zinc-300'>Users worldwide,<br/>providing them with</p>
      </div>
     </div>
     <div className="AboutUs w-full h-screen text-zinc-800 border-t-[1px] border-zinc-400 font-new">
        <div className="profile w-full h-full flex justify-between items-center text-zinc-50 px-10">
          <div className='w-1/2 h-full flex items-center justify-center rounded-lg overflow-hidden'>
          <div className='w-[28vw] h-[40vw]'>
            <img className=' w-full h-full object-cover object-bottom' src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y3ljNjl5NG1pdzh2dWppbjYxdGI5cDMxNHJrbzdqM2tyM2YwN2hjbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ABV8VwXGrXYvS/giphy.gif" alt="Zoom Image" />
          </div>
            
          </div>
          <div className='w-1/2 h-full text-[#4E5873] gap-2 flex flex-col justify-center items-center'>
            <h1 className='text-[4vw] tracking-tight pb-[2vw]'>Discover our journey</h1>
            <h1 className='text-[1.5vw] text-center tracking-tight'>Matelo Technology, we help brands grow in the digital world through powerful marketing, modern graphic design, and smart tech solutions. We don’t just make things look good — we build ideas that connect, communicate, and convert. Whether you’re a startup or an established brand, we bring creativity, strategy, and technology together to push your business forward.</h1>
          </div>
        </div>
     </div>
    <Footer />
    </>
  )
}

export default About
