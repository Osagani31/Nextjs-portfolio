import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import ScrollReveal from '@/components/ScrollReveal';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-purple-100 pt-12 pb-8 dark:border-purple-900/40">
      <ScrollReveal className="text-center">
        <h2 className="text-2xl font-semibold font-ovo">
          Osagani <span className="gradient-text">Perera</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-ovo mt-2">
          Full Stack Developer · Open to opportunities
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100} className="flex items-center justify-center gap-3 mt-6 font-ovo">
        <Image
          src={assets.mail_icon}
          alt="Mail Icon"
          width={24}
          height={24}
          className="object-contain dark:invert"
        />
        <a
          href="mailto:osaganiperera123@gmail.com"
          className="text-gray-600 hover:text-purple-600 transition font-ovo dark:text-gray-300 dark:hover:text-purple-400"
        >
          osaganiperera123@gmail.com
        </a>
      </ScrollReveal>

      <ScrollReveal delay={200} className="flex items-center justify-center gap-6 mt-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Osagani31"
          className="text-sm text-gray-500 hover:text-purple-600 transition font-ovo dark:text-gray-400 dark:hover:text-purple-400"
        >
          GitHub
        </a>
        <span className="text-purple-300 dark:text-purple-800">·</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/osagani-perera-0660842a3"
          className="text-sm text-gray-500 hover:text-purple-600 transition font-ovo dark:text-gray-400 dark:hover:text-purple-400"
        >
          LinkedIn
        </a>
      </ScrollReveal>

      <p className="text-center text-xs text-gray-400 mt-8 font-ovo dark:text-gray-500">
        © {new Date().getFullYear()} Osagani Perera. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
