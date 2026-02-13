"use client";

import React, { useMemo, useState } from 'react';
import { workData, assets } from '@/assets/assets';

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(
    () => (showAll ? workData : workData.slice(0, 4)),
    [showAll]
  );

  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My Latest Work</h2>
       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-200'>
      A showcase of my work, combining creative UI/UX design with powerful MERN stack development to build modern, interactive, and scalable web applications.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5'>
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 bg-white rounded-md py-3 px-5 flex items-center justify-between duration-500 transition-[bottom] group-hover:bottom-7 dark:bg-dark-theme dark:border dark:border-gray-700'>
              <div>
                <h2 className='text-black font-ovo font-semibold dark:text-white'>{project.title}</h2>
                <p className='text-gray-600 text-sm font-ovo dark:text-gray-300'>{project.description}</p>
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} link`}
                  className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition dark:border-white dark:shadow-[2px_2px_0_#fff] dark:group-hover:bg-gray-800'
                >
                  <img src={assets.send_icon} alt='send icon' className='w-5 dark:invert' />
                </a>
              ) : (
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:border-white dark:shadow-[2px_2px_0_#fff]'>
                  <img src={assets.send_icon} alt='send icon' className='w-5 dark:invert' />
                </div>
              )}
            </div>
          </div>
        ))}
        
      </div>
    <button
      type='button'
      onClick={() => setShowAll((prev) => !prev)}
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
      border-gray-700 rounded-full py-3 px-10 mx-auto my-20 transition-colors duration-500 hover:bg-gray-300 font font-ovo dark:text-gray-200 dark:border-gray-400 dark:hover:bg-gray-800'
    >
      {showAll ? 'Show less' : 'Show more'}
      <img src={assets.right_arrow_bold} alt='Right arrow' className='w-4 dark:invert'/>
    </button>


    </div>
  );
}

export default Work;
          