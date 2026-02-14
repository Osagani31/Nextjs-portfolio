"use client";

import { assets } from '@/assets/assets';
import { useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
    const sideMenuRef = useRef();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    };
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-60 absolute left-1/2 -translate-x-1/2 dark:bg-dark-theme dark:bg-opacity-80 dark:border dark:border-gray-700'>
        <li><a className='font-ovo' href="#home">Home</a></li>
        <li><a className='font-ovo' href="#about">About Me</a></li>
        <li><a className='font-ovo' href="#services">Services</a></li>
        <li><a className='font-ovo' href="#work">My Work</a></li>
        <li><a className='font-ovo' href="#contact">Contact Me</a></li>
     </ul>
    <div className='ml-auto flex items-center gap-4'>
 
    <button onClick={toggleTheme} aria-label="Toggle theme">
        <img
          src={isDark ? assets.sun_icon : assets.moon_icon}
          alt={isDark ? "Sun icon" : "Moon icon"}
          className='w-6'
        />
    </button>



      <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
      py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-gray-400'>
        Contact
        <img
          src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
          alt="Arrow icon"
          className="w-3"
        />
      </a>
<button className='block md:hidden ml-3' onClick={openMenu}>
  <img src={isDark ? assets.menu_white : assets.menu_black} alt="Menu icon" className='w-6' />
</button>




    </div>

    {/* mobile menu */}

    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-theme'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
            <img
              src={isDark ? assets.close_white : assets.close_black}
              alt="Close icon"
              className='w-5 cursor-pointer'
            />
        </div>


        <li><a className='font-ovo' onClick={closeMenu} href="#home">Home</a></li>
        <li><a className='font-ovo' onClick={closeMenu} href="#about">About Me</a></li>
        <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
        <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
        <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>

    </ul>

    </nav>
      
    </>
  );
}

export default Navbar;
