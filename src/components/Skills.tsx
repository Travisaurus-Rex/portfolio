'use client';

import { useEffect, useState } from 'react';
import { Server, Layout, BrainCircuit } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 section">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          I’m a software engineer focused on building reliable, scalable backend systems with 
          <span className="text-accent"> Node.js</span>, 
          <span className="text-accent"> TypeScript</span>, 
          <span className="text-accent"> NestJS</span>, and 
          <span className="text-accent"> Express</span>. 
          My work centers on designing structured APIs, modular services, and backend architectures 
          that are easy to maintain and extend over time.
        </p>

        <p>
          With a strong full-stack background in
          <span className="text-accent"> Angular</span> and 
          <span className="text-accent"> .NET</span>, I&apos;ve developed a solid understanding of architecture, dependency injection, and modular design; principles I now apply across both frontend and backend work.
        </p>

        <p>
          Whether I&apos;m optimizing API performance, refining service boundaries, or improving developer 
          workflows, my goal is to create backend systems that are fast, maintainable, and a pleasure 
          to work with.
        </p>
      </div>

      <div
        className={`grid md:grid-cols-3 gap-8 mt-12 transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="rounded-lg p-6 bg-card/20">
          <div className="flex items-center space-x-3 mb-4">
            <Server className="text-neon-cyan w-6 h-6" />
            <h3 className="text-xl font-semibold text-neon-cyan">Backend</h3>
          </div>
          <p className="leading-relaxed text-base">
            I design and maintain backend services using 
            <span className="text-accent"> Node.js</span>, 
            <span className="text-accent"> TypeScript</span>, 
            <span className="text-accent"> NestJS</span>, and 
            <span className="text-accent"> Express</span>. 
            I work with databases like PostgreSQL, MongoDB, and SQL Server, focusing on clean 
            architecture, modular code, strong typing, and patterns that scale across teams.
          </p>
        </div>

        <div className="rounded-lg p-6 bg-card/20">
          <div className="flex items-center space-x-3 mb-4">
            <Layout className="text-neon-pink w-6 h-6" />
            <h3 className="text-xl font-semibold text-neon-pink">Frontend</h3>
          </div>
          <p className="leading-relaxed text-base">
            With over six years of experience building UI systems in <span className="text-accent">Angular</span> and <span className="text-accent">React</span>, 
            I understand how frontends consume data, handle state, and scale across teams. 
            That perspective helps me design backend APIs that integrate cleanly with modern frontend architectures.
          </p>
        </div>

        <div className="rounded-lg p-6 bg-card/20">
          <div className="flex items-center space-x-3 mb-4">
            <BrainCircuit className="text-neon-yellow w-6 h-6" />
            <h3 className="text-xl font-semibold text-neon-yellow">Mindset</h3>
          </div>
          <p className="leading-relaxed text-base">
            I emphasize code clarity, testing, and maintainable architecture. I enjoy improving 
            developer experience through better tooling, documentation, and CI/CD workflows. 
            My backend focus has strengthened how I approach performance, reliability, and long-term 
            system health.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="neon-border border-neon-cyan/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm">
          <h3 className="text-2xl mb-4 text-neon-cyan">Always Learning</h3>
          <p className="text-foreground/80 leading-relaxed text-base">
            I stay committed to continuous learning within the Node.js ecosystem. I’m currently 
            deepening my expertise in NestJS, advanced TypeScript patterns, backend performance 
            optimization, database design, testing, and distributed systems.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {['NestJS', 'Go', 'PostgreSQL', 'Docker', 'CI/CD'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-secondary border text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
