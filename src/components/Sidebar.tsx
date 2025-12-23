"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { LinkShelf } from "./LinkShelf";
import { DevName } from "./DevName";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Engineer";
  const useLogo = true;

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
    const sections = document.querySelectorAll("section[id]");
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
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <aside className="hidden lg:flex lg:flex-none lg:w-[22rem] sticky top-0 h-screen flex-col justify-between px-8 py-16 bg-sidebar border-r border-neutral-800">
        {useLogo && <Logo />}
        {!useLogo && (
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
              Building modern, scalable web applications with clean architecture
              and intuitive user experiences.
            </p>
          </div>
        )}

        <nav className="space-y-4 mt-16">
          {["about", "skills", "work", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={`group relative flex items-center text-3xl font-thin transition-all duration-300
                ${
                  active === id
                    ? "text-[var(--color-text-light)]"
                    : "text-[var(--color-accent)] hover:text-[var(--color-text-light)]"
                }`}
            >
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[var(--color-text-light)] transition-all duration-300
                ${
                  active === id ? "w-[1.25rem]" : "w-0 group-hover:w-[1.25rem]"
                }`}
              />

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

        <LinkShelf />
      </aside>

      <header className="lg:hidden sticky top-0 z-20 bg-sidebar backdrop-blur p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <DevName />
          <LinkShelf />
        </div>
      </header>
    </>
  );
}
