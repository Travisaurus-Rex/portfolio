"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Engineer";
  const useLogo = false;

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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // assumes each section has an id matching your nav
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // triggers when half the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden lg:flex flex-none w-[22rem] sticky top-0 h-screen flex-col justify-between px-8 py-16 bg-sidebar border-r border-neutral-800">
        { useLogo &&
          <Logo />
        }
        { !useLogo && 
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
        }

        <nav className="space-y-4 mt-16">
          {["about", "skills", "work", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={`group relative flex items-center text-3xl font-thin transition-all duration-300
                ${active === id
                  ? "text-[var(--color-contrast)]"
                  : "text-[var(--color-accent)] hover:text-[var(--color-contrast)]"
                }`}
            >
              {/* line */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[var(--color-contrast)] transition-all duration-300
                ${active === id ? "w-[1.25rem]" : "w-0 group-hover:w-[1.25rem]"}`}
              />

              {/* text */}
              <span
                className={`relative transition-transform duration-300 ${
                  active === id ? "translate-x-6" : "group-hover:translate-x-6"
                }`}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </span>
            </a>
          ))}
        </nav>


        <div className="flex items-center space-x-5 text-neutral-400 mt-12">
          <a
            href="https://github.com/Travisaurus-Rex"
            className="text-4xl text-accent hover:text-contrast transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/travis-a-768637a2/"
            className="text-4xl text-accent hover:text-contrast transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:tadamsdeveloper@gmail.com"
            className="text-4xl text-accent hover:text-contrast transition-colors"
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
