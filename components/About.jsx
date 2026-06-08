"use client";

import { assets, infoList, toolsData } from '@/assets/assets';
import ScrollReveal from '@/components/ScrollReveal';
import { useTheme } from '@/components/ThemeProvider';

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Years Learning' },
  { value: '5+', label: 'Technologies' },
];

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id="about" className="w-full px-[12%] pt-32 pb-10 scroll-mt-28">
      <ScrollReveal>
        <h4 className="text-center mb-2 text-lg font-ovo text-purple-600 dark:text-purple-400">
          Introduction
        </h4>
        <h2 className="text-center text-5xl font-ovo">
          About <span className="gradient-text">Me</span>
        </h2>
      </ScrollReveal>

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-16 my-16">
        <ScrollReveal className="w-64 sm:w-80 rounded-3xl max-w-none" delay={100}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <img
              src={assets.user_image}
              alt="User Image"
              className="relative w-full rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </ScrollReveal>

        <div className="flex-1">
          <ScrollReveal delay={150}>
            <p className="mb-8 max-w-2xl font-ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a third-year Computer Science undergraduate and aspiring Full Stack Developer
              with hands-on experience in building end-to-end web applications. I enjoy learning
              new technologies, solving real-world problems, and continuously improving my
              development skills.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl">
            {stats.map(({ value, label }, index) => (
              <ScrollReveal
                key={label}
                delay={200 + index * 80}
                className="stat-card text-center p-4 rounded-xl border border-purple-100 bg-purple-50/50 dark:border-purple-900/40 dark:bg-purple-950/20"
              >
                <p className="text-2xl sm:text-3xl font-ovo gradient-text font-semibold">{value}</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-ovo mt-1">{label}</p>
              </ScrollReveal>
            ))}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl items-stretch">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <ScrollReveal
                key={title}
                as="li"
                delay={250 + index * 100}
                className="border border-purple-100 rounded-xl p-6 cursor-pointer interactive-card dark:border-purple-900/40 flex flex-col gap-3 h-full text-left hover:border-purple-300 dark:hover:border-purple-700"
              >
                <img src={isDark ? iconDark : icon} alt={title} className="w-7 mt-1" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 break-words font-ovo">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400 break-words font-ovo">
                  {description}
                </p>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal delay={400}>
            <h4 className="my-8 text-gray-700 font-ovo dark:text-gray-200 text-lg">Tools I use</h4>
            <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
              {toolsData.map((tool, index) => (
                <li
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-purple-100 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                  key={index}
                >
                  <img src={tool} alt="Tool" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default About;
