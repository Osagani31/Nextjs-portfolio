"use client";

import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='about' className='w-full px-[12%] pt-32 pb-10 scroll-mt-28'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About Me</h2>
    <div className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none' >
             <img src={assets.user_image} alt="User Image" className='w-full rounded-3xl'/>

        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo text-gray-700 dark:text-gray-200'>
            I’m a third-year Computer Science undergraduate and aspiring Full Stack Developer with hands-on experience in building end-to-end web applications. I enjoy learning new technologies, solving real-world problems, and continuously improving my development skills.
          </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl items-stretch'>
            {infoList.map(function ({ icon, iconDark, title, description }, index) {
                return (
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-light-hover hover:-translate-y-1 hover:shadow-black dark:border-gray-600 dark:hover:bg-dark-hover dark:hover:shadow-white flex flex-col gap-3 h-full text-left' key={index}>
                  <img src={isDark ? iconDark : icon} alt={title} className='w-7 mt-1' />
                  <h3 className='text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 break-words'>{title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed dark:text-gray-300 break-words'>{description}</p>
                    </li>

                );
            })}
          </ul>
        <h4 className='my-6 text-gray-700 font-ovo dark:text-gray-200'>Tools I use</h4>
        <ul className='flex items-center gap-3 sm:gap-5'>
          {toolsData.map((tool,index)=>(
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-gray-600'
             key={index}>
              <img src={tool} alt='Tool' className='w-5 sm:w-7' />
           </li>
          ))}
        </ul>


        </div>
    </div>
    </div>
  );
}

export default About;
