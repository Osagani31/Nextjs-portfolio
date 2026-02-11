import { assets, infoList } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About Me</h2>
    <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none' >
             <Image src={assets.user_image} alt="User Image" className='w-full rounded-3xl'/>

        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>
            I’m a third-year Computer Science undergraduate and aspiring Full Stack Developer with hands-on experience in building end-to-end web applications. I enjoy learning new technologies, solving real-world problems, and continuously improving my development skills.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(function ({ icon, iconDark, title, description }, index) {
                return (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer' key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>

                );
            })}
          </ul>

        </div>
    </div>
    </div>
  );
}

export default About;
