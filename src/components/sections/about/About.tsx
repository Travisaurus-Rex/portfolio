"use client";

import { useYearsOfExperience } from "@/hooks/useYearsOfExperience";

export default function About() {
  const yoe = useYearsOfExperience();

  return (
    <section id="about" className="flex items-center section">
      <div className="mx-auto w-full px-6">
        <div className="mb-4 text-sm uppercase tracking-widest text-accent font-bold">
          About
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">
          <span className="md:text-8xl">I build reliable </span>
          <br />
          and scalable <span className="text-accent">software</span> that powers
          real-world products and business operations.
          <span className="text-accent font-bold px-1">*</span>
        </h1>

        <div className="mt-6 h-0.5 w-48 bg-[var(--color-text)]" />

        <p className="mt-8 text-xl leading-relaxed">
          I&apos;m a senior engineer with {yoe}+ years developing production
          applications used by customers and internal teams. I work across
          frontend, backend, data, and infrastructure, designing systems that
          balance usability, performance, and long-term adaptability as products
          and organizations grow.
        </p>

        <h6 className="mt-8 text-xl font-bold">
          <span className="text-accent font-bold text-2xl px-1">*</span>I also
          write in really big words sometimes but I promise, I&apos;m not
          screaming at you.
        </h6>
      </div>
    </section>
  );
}
