"use client";

import React from 'react';

import { assets } from '@/assets/assets';

const Contact = () => {
  const [result, setResult] = React.useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setResult('Message sent successfully');
      } else {
        const message = data?.message || 'Something went wrong';
        setResult(message);
      }
    } catch (error) {
      setResult('Something went wrong');
    }
  };

  return (

    <div 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center'
      style={{ 
        backgroundImage: `url(${assets.footer_bg_color})`,
        backgroundSize: '90% auto'
      }}
    >
      <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in Touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in UI/UX design to full stack development.
      </p>
      <form  onSubmit={onSubmit} className='max-w-2xl mx-auto flex flex-col gap-4'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <input
            type="text"
            placeholder='Enter your name'
            required
            className='flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-400 font font-ovo'
            name='name'
          />
          <input
            type="email"
            placeholder='Enter your email'
            required
            className='flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-400 font font-ovo'
            name='email'
          />
        </div>
        <textarea
          rows={6}
          placeholder='Enter your message'
          required
          className='px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-400 resize-none font font-ovo'
          name='message'
       
       />
        <button
          type='submit'
          className='mt-2 w-full sm:w-auto px-10 py-3 bg-black text-white rounded-full font-ovo hover:bg-gray-800 transition-colors'
        >
          Submit now
        </button>
        <p className='mt-4 font font-ovo'>{result}</p>
      </form>
    </div>
  );
}

export default Contact;
