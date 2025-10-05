"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
 
export default function Sidebar() {
  const [active, setActive] = useState('');
  const [text, setText] = useState('');
  const fullText = 'Full Stack Software Engineer';

  useEffect(() => {
    let i = 0;
    const startTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
        }
      }, 100);

      // Cleanup interval if component unmounts
      return () => clearInterval(timer);
    }, 500); // initial 500ms delay

    // Cleanup timeout if component unmounts before delay
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <>
      {/* Desktop / large screens: fixed left column */}
      <aside className="hidden lg:flex flex-none w-[30rem] sticky top-0 h-screen flex-col justify-between px-10 py-20 border-r border-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary">Travis Adams</h1>
          <div className="text-xl lg:text-2xl text-foreground/80 h-8">
            <span className="text-neon-green">&gt;</span> {text}
            <span className="animate-pulse">|</span>
          </div>
          <p className="mt-6 text-lg text-neutral-200">
            Building modern, scalable web apps
          </p>
        </div>

        <div>
          <nav className="space-y-5">
            <a href="#about" onClick={() => setActive('about')} className="block text-2xl hover:text-[var(--color-neon-blue)]">About</a>
            <a href="#work" onClick={() => setActive('work')} className="block text-2xl hover:text-[var(--color-neon-blue)]">Work</a>
            <a href="#skills" onClick={() => setActive('skills')} className="block text-2xl hover:text-[var(--color-neon-blue)]">Skills</a>
            <a href="#projects" onClick={() => setActive('projects')} className="block text-2xl hover:text-[var(--color-neon-blue)]">Projects</a>
            <a href="#contact" onClick={() => setActive('contact')} className="block text-2xl hover:text-[var(--color-neon-blue)]">Contact</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4 text-neutral-400">
          <a href="https://github.com/Travisaurus-Rex" className="text-3xl" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" className="text-3xl" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:tadamsdeveloper@gmail.com" className="text-3xl"><MdEmail /></a>
        </div>
      </aside>



      {/* Mobile header (only shown on small screens) */}
      <header className="lg:hidden sticky top-0 z-20 bg-[rgba(10,10,15,0.9)] backdrop-blur p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Travis Adams</h1>
          <nav className="hidden sm:flex space-x-4 text-sm text-neutral-300">
            <a href="#about" className="hover:text-[var(--color-neon-blue)]">About</a>
            <a href="#skills" className="hover:text-[var(--color-neon-blue)]">Skills</a>
            <a href="#projects" className="hover:text-[var(--color-neon-blue)]">Projects</a>
            <a href="#contact" className="hover:text-[var(--color-neon-blue)]">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}

