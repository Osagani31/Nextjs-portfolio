import { assets } from '@/assets/assets';
import React from 'react';

const Header = () => {
  return (
    <div id="home" className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-24 scroll-mt-24'>
      <div>
        <img
          src={assets.profile_img}
          alt="Profile Image"
          className='rounded-full w-32'
        />
      </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
          Hi! I'm Osagani Perera 
          <img src={assets.hand_icon} alt='Hand icon' className='w-6' />
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            Full Stack Developer 
        </h1>
        <p className='max-w-2xl mx-auto font-ovo text-gray-700 dark:text-gray-200'>
            I’m a passionate Full Stack Developer skilled in building responsive, user-friendly web applications from front end to back end. I enjoy turning ideas into scalable solutions using modern technologies and clean code practices.
        </p>
        <div className='flex flex-col items-center gap-4 mt-4'>
          <div className='flex items-center gap-3'>
            <a
              href="https://github.com/Osagani31"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className='p-1 transition'
            >
              <img src="/github.jpg" alt="GitHub" className='w-9 h-9 object-contain' />
            </a>
            <a
              href="https://linkedin.com/in/osagani-perera-0660842a3"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className='p-1 transition'
            >
              <img src="/linkedin.jpg" alt="LinkedIn" className='w-9 h-9 object-contain' />
            </a>
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <a
              href="#contact"
              className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black'
            >
              contact me
              <img src={assets.right_arrow_white} alt="Right arrow" className='w-4 dark:invert' />
            </a>
            <a
              href="/sample-resume.pdf"
              download
              className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-gray-700 dark:text-gray-200 dark:border-gray-400'
            >
              my resume
              <img src={assets.download_icon} alt="Download icon" className='w-4 dark:invert' />
            </a>
          </div>
        </div>



    </div>
  );
}

export default Header;
