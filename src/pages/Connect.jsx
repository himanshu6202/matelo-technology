import React from 'react'

import Navbar from '../components/Navbar'
import { MdArrowOutward } from "react-icons/md";

function Connect() {
  return (
    <>
    <div className='h-20 w-full bg-transparent absolute border-zinc-400 border-b-[1px]'>
      <Navbar />
    </div>
        
    <div className='w-full h-screen flex justify-center text-[#4D5B75]'>
        <div className='title w-[40vw] h-full flex  font-new pt-20 pl-10 border-zinc-400 border-l-[1px] border-r-[1px]'>
            <div className='w-full flex flex-col gap-10'>
                <h1 className='text-7xl font-bold  tracking-tight leading-20 mt-5'>Let's get<br/>in touch</h1>
                <h3 className='text-3xl tracking-tight '>Don't be afraid to<br/>to say hello with us!</h3>
                <div className='contact'>
                  <h5 className='text-sm text-zinc-500'>Phone</h5>
                  <p className='text-m'>+(91) 8818860009</p>
                </div>
                <div className='Email'>
                  <h5 className='text-sm text-zinc-500'>Email</h5>
                  <p className='text-m'>infomatelotachnologies@gmail.com</p>
                </div>
                <div className='Address'>
                  <h5 className='text-sm text-zinc-500'>Office</h5>
                  <p className='text-m'>Fine Avenue Phase 1,<br/>Madhya Pradesh Bhopal 462042</p>
                  <a className='text-m underline ' href="https://maps.app.goo.gl/Q18KHQLhjwc6yYnc6">See on Google Map <MdArrowOutward /> </a>
                </div>
            </div>
        </div>
        <div className='w-[40vw] h-full font-new pt-20 border-zinc-400 border-r-[1px]'>
          <div className='p-10 mb-19'>
            <h1>We’re excited to connect and start something special together. Have a question, idea, or enquiry? Reach out to us — we’d love to hear from you and make it happen!</h1>
          </div>
          <div className="form w-full relative bg-[#4D5B75] p-10 flex flex-col gap-5 text-zinc-50">
            <div className='Title'>
              <h1 className='text-[3vw] font-extrabold'>Connect</h1>
            </div>
            <div className="nameAndEmail flex gap-5">
              <input className='text-md text-white border-zinc-200 border-b-[1px] w-full h-10 outline-none' type="text" name='name' placeholder='Name'/>
            <input className='text-md text-white border-zinc-200 border-b-[1px] w-full h-10 outline-none' type="text" name='email' placeholder='Email'/>
            </div>
            <div className="nameAndEmail flex gap-5 mt-5">
              <input className='text-md text-white border-zinc-200 border-b-[1px] w-full h-10 outline-none' type="text" name='phone' placeholder='Phone'/>
            <input className='text-md text-white border-zinc-200 border-b-[1px] w-full h-10 outline-none' type="text" name='subject' placeholder='Subject'/>
            </div>
            <textarea className='text-md text-white border-zinc-200 border-b-[1px] w-full h-10 outline-none mt-5' name="message" placeholder='Tell us about your interested in'></textarea>
            <button className='p-2  bg-zinc-100 mt-10 text-[#4D5B75] mb-10' type="submit">Send to us</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Connect