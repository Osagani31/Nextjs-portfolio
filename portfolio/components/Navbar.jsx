"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useRef } from 'react';

const Navbar = () => {
     const sideMenuRef =useRef();
     const openMenu=()=>{
     sideMenuRef.current.style.transform='translateX(-16rem)'
     }

     const closeMenu=()=>{
        sideMenuRef.current.style.transform='translateX(16rem)'
     }
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color}
            alt="Header background color"
            className='w-full'
        />
    </div>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 relative'>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 absolute left-1/2 -translate-x-1/2'>
        <li><a className='font-ovo' href="#home">Home</a></li>
        <li><a className='font-ovo' href="#about">About Me</a></li>
        <li><a className='font-ovo' href="#services">Services</a></li>
        <li><a className='font-ovo' href="#work">My Work</a></li>
        <li><a className='font-ovo' href="#contact">Contact Me</a></li>
     </ul>
    <div className='ml-auto flex items-center gap-4'>
 
    <button>
        <Image src={assets.moon_icon}
           alt="Moon icon"
           className='w-6'       
        />
    </button>



      <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
      py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>
        Contact
        <Image
          src={assets.arrow_icon}
          alt="Arrow icon"
          className="w-3"
          width={12}
          height={12}
        />
      </a>
<button className='block md:hidden ml-3' onClick={openMenu}>
    <Image src={assets.menu_black}
        alt="Menu icon"
        className='w-6'
    />
</button>




    </div>

    {/* mobile menu */}

    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black}
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
