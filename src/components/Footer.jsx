import React from 'react'
import Logo from '../assets/white.png'
import Navbar from './Navbar'
import Wroked from './Worked'

function Footer() {

const socialLinks = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/matelotechnology/",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/p/matelo-technology-61574355905835/",
    },
    {
        name: "Linkedin",
        url: "https://linkedin.com",
    },
    {
        name: "Youtube",
        url: "https://youtube.com",
    }
]


  return (
    <div className='w-full h-screen bg-[#383731] text-zinc-50 px-10 py-10 flex gap-5'>
      <div className='w-1/2 h-full flex-col flex justify-between uppercase pt-10'>
        <div className='font-founder'>
            <h1 className='text-[7.5vw] -mb-15 '>Matelo </h1>
            <h1 className='text-[7.5vw] '>Technology</h1>
        </div>
        <div className='h-10 w-10'> <img src={Logo} alt="" /> </div>
      </div>
      <div className='w-1/2 py-10 '>
        <h1 className='text-[7.5vw] font-founder uppercase'>Connect</h1>
        <div className="connectContainer font-new">
        <div className='Social mt-1'>
            <p className='mb-5'>S:</p>
            <ul className='underline text-[1vw] '>
                {socialLinks.map((item, index) => (
                <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.name}
                    </a>
                </li>
                ) )}
            </ul>
        </div>
        <div className='Address mt-10'>
            <p className='mb-5'>A:</p>
            <ul className='underline text-[1vw] '>
                <li><a href="https://maps.app.goo.gl/kvyQcjqSWDv3FwvVA">Fine Avenue Phase 1</a></li>
                <li><a href="https://maps.app.goo.gl/kvyQcjqSWDv3FwvVA">Bhopal MP, India</a></li>
            </ul>
        </div>
        <div className='Email mt-10'>
            <p className='mb-5'>E:</p>
            <ul className='underline text-[1vw] '>
                <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Infomatelotechnology@gmail.com</a></li>
            </ul>
        </div>
        <div className='Website mt-10'>
            <ul className='none text-[1vw] text-zinc-50'>
                <li className='text-[#444444]'>www.matelotechnology.com</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
