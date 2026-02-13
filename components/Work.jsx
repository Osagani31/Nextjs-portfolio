import React from 'react';
import { workData, assets } from '@/assets/assets';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My Latest Work</h2>
       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
      A showcase of my work, combining creative UI/UX design with powerful MERN stack development to build modern, interactive, and scalable web applications.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 bg-white rounded-md py-3 px-5 flex items-center justify-between duration-500 transition-[bottom] group-hover:bottom-7'>
              <div>
                <h2 className='text-black font-ovo font-semibold'>{project.title}</h2>
                <p className='text-gray-600 text-sm font-ovo'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition'>
                <img src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </div>
        ))}
        
      </div>
    <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
    border-gray-700 rounded-full py-3 px-10 mx-auto my-20 transition-colors duration-500 hover:bg-gray-300'>
        Show more
        <img src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </a>


    </div>
  );
}

export default Work;
          