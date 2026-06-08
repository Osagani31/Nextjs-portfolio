"use client";

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

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
        setResult('Message sent successfully!');
        event.target.reset();
      } else {
        const message = data?.message || 'Something went wrong';
        setResult(message);
      }
    } catch {
      setResult('Something went wrong');
    }
  };

  return (
    <div
      id="contact"
      className="contact-section w-full px-[12%] py-20 scroll-mt-32 bg-gradient-to-b from-transparent via-purple-50/30 to-purple-100/40 dark:from-transparent dark:via-purple-950/20 dark:to-purple-950/40"
    >
      <ScrollReveal>
        <h4 className="text-center mb-2 text-lg font-ovo text-purple-600 dark:text-purple-400">
          Connect with me
        </h4>
        <h2 className="text-center text-5xl font-ovo">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my
          expertise in UI/UX design to full stack development.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto flex flex-col gap-5 glass-card rounded-2xl p-8 sm:p-10 shadow-xl shadow-purple-500/5"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="form-input flex-1 px-4 py-3.5 border border-purple-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 font-ovo text-gray-800 dark:text-white dark:border-purple-800 dark:bg-dark-theme/40 dark:placeholder-gray-500 dark:focus:ring-purple-600"
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="form-input flex-1 px-4 py-3.5 border border-purple-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 font-ovo text-gray-800 dark:text-white dark:border-purple-800 dark:bg-dark-theme/40 dark:placeholder-gray-500 dark:focus:ring-purple-600"
              name="email"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Enter your message"
            required
            className="form-input px-4 py-3.5 border border-purple-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 resize-none font-ovo text-gray-800 dark:text-white dark:border-purple-800 dark:bg-dark-theme/40 dark:placeholder-gray-500 dark:focus:ring-purple-600"
            name="message"
          />
          <button
            type="submit"
            className="mt-2 w-full sm:w-auto self-center px-12 py-3.5 rounded-full font-ovo btn-cta bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-pink-400 btn-shimmer"
          >
            Submit now
          </button>
          {result && (
            <p
              className={`mt-2 text-center font-ovo text-sm ${
                result.includes('success')
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
