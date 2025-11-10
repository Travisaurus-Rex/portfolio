"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Engineer";

  useEffect(() => {
    let i = 0;
    const startTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }, 500);
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden lg:flex flex-none w-[22rem] sticky top-0 h-screen flex-col justify-between px-8 py-16 bg-primary border-r border-neutral-800">
        <div className="text-left leading-tight">
          <h1 className="text-5xl font-bold text-accent mb-1 tracking-tight">
            Travis Adams
          </h1>

          <div className="flex items-baseline gap-2 text-lg text-foreground/90">
            <span className="text-neon-green text-xl leading-none">&gt;</span>
            <span className="whitespace-nowrap font-medium">{text}</span>
            <span className="animate-pulse text-xl leading-none">|</span>
          </div>

          <p className="mt-3 text-sm max-w-[18rem] leading-snug">
            Building modern, scalable web applications with clean architecture and
            intuitive user experiences.
          </p>
        </div>

        <nav className="space-y-4 mt-16">
          {["about", "work", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={`block text-lg transition-colors ${
                active === id
                  ? "text-[var(--color-neon-blue)]"
                  : "text-neutral-300 hover:text-[var(--color-neon-blue)]"
              }`}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-5 text-neutral-400 mt-12">
          <a
            href="https://github.com/Travisaurus-Rex"
            className="text-2xl hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-2xl hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:tadamsdeveloper@gmail.com"
            className="text-2xl hover:text-white"
          >
            <MdEmail />
          </a>
        </div>
      </aside>

      {/* mobile header */}
      <header className="lg:hidden sticky top-0 z-20 bg-[rgba(10,10,15,0.9)] backdrop-blur p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Travis Adams</h1>
          <nav className="hidden sm:flex space-x-4 text-sm text-neutral-300">
            {["about", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-[var(--color-neon-blue)]"
              >
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
