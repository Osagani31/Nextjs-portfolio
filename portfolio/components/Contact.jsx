import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Contact = () => {
  return (
    <div 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center'
      style={{ 
        backgroundImage: `url(${assets.footer_bg_color.src})`,
        backgroundSize: '90% auto'
      }}
    >
          <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in Touch</h2>
       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in UI/UX Design to Full Stack Journey </p>
      <form>
        <div>
            <input type="text" placeholder='Enter your name' required/>
            <input tupe="email" placeholder='Enter your email' required/>
 
        </div>
        <textarea rows='6' placeholder='Enter your message' required></textarea>
        <button type='submit'>
            Submit now
        </button>

      </form>
    </div>
  );
}

export default Contact;
