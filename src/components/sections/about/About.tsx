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

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-balance">
          I build scalable and reliable
          <span className="text-accent"> ecommerce </span> applications and
          <span className="text-accent"> business</span> platforms that
          companies rely on.
          <span className="text-accent font-bold px-1">*</span>
        </h1>

        <div className="mt-6 h-0.5 w-48 bg-[var(--color-text)]" />

        <p className="mt-8 text-xl leading-relaxed">
          I&apos;m a senior engineer with {yoe} years building business
          production systems, sales platforms, ecommerce applications, and
          customer-facing product software. I work across frontend, backend,
          databases, and infrastructure, focusing on architecture that adapts as
          products grow and teams evolve.{" "}
        </p>

        <p className="mt-8 text-xl font-bold">
          <span className="text-accent font-bold text-2xl px-1">*</span>I also
          write in really big words sometimes but I promise, I&apos;m not
          screaming at you.
        </p>
      </div>
    </section>
  );
}
