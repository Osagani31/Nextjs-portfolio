"use client";

import { assets } from '@/assets/assets';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'My Work' },
  { href: '#contact', label: 'Contact Me' },
];

const Navbar = () => {
  const sideMenuRef = useRef();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 animate-nav-in transition-all duration-300 ${
          scrolled
            ? 'glass-nav bg-white/70 dark:bg-dark-theme/80 shadow-sm dark:shadow-purple-900/10'
            : ''
        }`}
      >
        <a href="#home" className="font-ovo text-lg font-semibold gradient-text hidden sm:block">
          OP
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 glass-nav bg-white/60 shadow-sm border border-purple-100 absolute left-1/2 -translate-x-1/2 dark:bg-dark-theme/70 dark:border-purple-900/40">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a className="font-ovo nav-link text-sm" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
          >
            <img
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt={isDark ? 'Sun icon' : 'Moon icon'}
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-purple-300 rounded-full font-ovo dark:border-purple-700 btn-cta bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none hover:from-purple-500 hover:to-pink-400"
          >
            Contact
            <img src={assets.arrow_icon_dark} alt="Arrow icon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img
              src={isDark ? assets.menu_white : assets.menu_black}
              alt="Menu icon"
              className="w-6"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen glass-nav bg-white/95 transition duration-500 dark:bg-dark-theme/95 border-l border-purple-100 dark:border-purple-900/40"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src={isDark ? assets.close_white : assets.close_black}
              alt="Close icon"
              className="w-5 cursor-pointer"
            />
          </div>

          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a className="font-ovo text-lg" onClick={closeMenu} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
