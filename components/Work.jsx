"use client";

import React, { useMemo, useState } from 'react';
import { workData, assets } from '@/assets/assets';
import ScrollReveal from '@/components/ScrollReveal';

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(
    () => (showAll ? workData : workData.slice(0, 4)),
    [showAll]
  );

  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 6;
    const rotateY = (x / rect.width) * 6;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-28">
      <ScrollReveal>
        <h4 className="text-center mb-2 text-lg font-ovo text-purple-600 dark:text-purple-400">
          My Portfolio
        </h4>
        <h2 className="text-center text-5xl font-ovo">
          My Latest <span className="gradient-text">Work</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300">
          A showcase of my work, combining creative UI/UX design with powerful MERN stack
          development to build modern, interactive, and scalable web applications.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {visibleProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 80}>
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group interactive-card overflow-hidden ring-1 ring-purple-100 dark:ring-purple-900/40"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                transition: 'transform 300ms ease',
              }}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 glass-card rounded-lg py-3 px-5 flex items-center justify-between duration-500 transition-[bottom,box-shadow] group-hover:bottom-7 group-hover:shadow-xl">
                <div>
                  <h2 className="text-gray-900 font-ovo font-semibold dark:text-white text-sm sm:text-base">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm font-ovo dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {project.deployment ? (
                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} deployment`}
                      className="border rounded-full border-purple-400 px-3 py-1 text-xs font-ovo text-purple-700 transition hover:bg-purple-100 dark:border-purple-600 dark:text-purple-300 dark:hover:bg-purple-950/50"
                    >
                      Live
                    </a>
                  ) : null}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} link`}
                      className="border rounded-full border-purple-400 w-9 aspect-square flex items-center justify-center transition hover:bg-purple-100 dark:border-purple-600 dark:hover:bg-purple-950/50"
                    >
                      <img src={assets.send_icon} alt="send icon" className="w-4 dark:invert" />
                    </a>
                  ) : (
                    <div className="border rounded-full border-purple-300 w-9 aspect-square flex items-center justify-center dark:border-purple-700">
                      <img src={assets.send_icon} alt="send icon" className="w-4 dark:invert" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="w-max flex items-center justify-center gap-2 text-purple-700 border border-purple-300 rounded-full py-3 px-10 mx-auto my-12 transition-all duration-300 hover:bg-purple-100 font-ovo dark:text-purple-300 dark:border-purple-700 dark:hover:bg-purple-950/40 btn-cta"
        >
          {showAll ? 'Show less' : 'Show more'}
          <img src={assets.right_arrow_bold} alt="Right arrow" className="w-4 dark:invert" />
        </button>
      </ScrollReveal>
    </div>
  );
};

export default Work;
