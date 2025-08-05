import React, { useEffect, useState, useCallback } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);




  return (
    <div className={`fixed z-[999] w-full px-10 pt-6 flex justify-between font-new transition-all duration-300 ${show ? 'top-0' : '-top-24'}`}> 
      <div className='logo w-[3vw] h-[3vw] contain'>
       <Link to='/'> <img src="../public/mlogo.png" alt="" /> </Link>
      </div>
      <div className=' flex gap-80 text-[#4E5873]'>
        <ul className='flex gap-3 '>
         <Link to='/'> <li>Home</li></Link>
         <Link><li>Work</li></Link>
         <Link to='/about'> <li>About Us</li></Link>
         <Link><li>Services</li></Link>
        </ul>
         <Link to='/connect'><h3>Connect</h3></Link>
      </div>
    </div>
  )
}

export default Navbar;
