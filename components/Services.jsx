import React from 'react';
import { serviceData } from '@/assets/assets';
import ScrollReveal from '@/components/ScrollReveal';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-16 scroll-mt-28">
      <ScrollReveal>
        <h4 className="text-center mb-2 text-lg font-ovo text-purple-600 dark:text-purple-400">
          What I offer
        </h4>
        <h2 className="text-center text-5xl font-ovo">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300">
          I specialize in full stack web development, building modern, scalable, and user-focused
          applications from frontend design to backend logic and deployment.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <ScrollReveal
            key={title}
            delay={index * 100}
            className="service-card border border-purple-100 rounded-xl px-8 py-12 cursor-pointer interactive-card dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center mb-4">
              <img src={icon} alt="" className="w-7" />
            </div>
            <h3 className="text-lg my-3 text-gray-800 dark:text-gray-100 font-ovo font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-gray-400 font-ovo">
              {description}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Services;
