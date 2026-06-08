import { assets } from '@/assets/assets';
import React from 'react';

const techStack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Flutter'];

const Header = () => {
  return (
    <div
      id="home"
      className="relative w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-28 scroll-mt-28 reveal"
    >
      <div className="hero-mesh" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-xl opacity-30 animate-pulse" />
          <img
            src={assets.profile_img}
            alt="Profile Image"
            className="relative rounded-full w-32 sm:w-36 animate-float shadow-lg ring-4 ring-purple-200 dark:ring-purple-900/50"
          />
        </div>

        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-1 font-ovo reveal reveal-delay-100">
          Hi! I&apos;m Osagani Perera
          <img src={assets.hand_icon} alt="Hand icon" className="w-6 animate-float" />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo reveal reveal-delay-200 leading-tight">
          <span className="gradient-text">Full Stack Developer</span>
        </h1>

        <p className="max-w-2xl mx-auto font-ovo text-gray-700 dark:text-gray-300 reveal reveal-delay-300 text-base sm:text-lg leading-relaxed">
          I&apos;m a passionate Full Stack Developer skilled in building responsive, user-friendly
          web applications from front end to back end. I enjoy turning ideas into scalable
          solutions using modern technologies and clean code practices.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-2 reveal reveal-delay-300">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="tech-pill px-4 py-1.5 text-sm font-ovo rounded-full border border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950/50 dark:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 mt-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Osagani31"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon p-1 rounded-full"
            >
              <img src="/github.jpg" alt="GitHub" className="w-10 h-10 object-contain rounded-full" />
            </a>
            <a
              href="https://linkedin.com/in/osagani-perera-0660842a3"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon p-1 rounded-full"
            >
              <img src="/linkedin.jpg" alt="LinkedIn" className="w-10 h-10 object-contain rounded-full" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center gap-2 btn-cta reveal reveal-delay-200 shadow-lg shadow-purple-500/25"
            >
              contact me
              <img src={assets.right_arrow_white} alt="Right arrow" className="w-4" />
            </a>
            <a
              href="/sample-resume.pdf"
              download
              className="px-10 py-3 border rounded-full border-purple-300 flex items-center gap-2 text-gray-700 dark:text-gray-200 dark:border-purple-700 btn-cta reveal reveal-delay-300 hover:bg-purple-50 dark:hover:bg-purple-950/30"
            >
              my resume
              <img src={assets.download_icon} alt="Download icon" className="w-4 dark:invert" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
