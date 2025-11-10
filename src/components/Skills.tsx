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
            I love building performant, maintainable systems with modern tooling,
            especially <span className="text-neon-cyan">Node.js</span> and{" "}
            <span className="text-neon-yellow">Go</span>. My background is in
            large-scale enterprise software using{" "}
            <span className="text-neon-pink">Angular</span> and{" "}
            <span className="text-neon-green">.NET</span>, and that experience
            shaped how I think about architecture, scalability, and teamwork.
          </p>

          <p>
            Over the past few years, I’ve shifted my focus toward backend
            engineering, writing efficient APIs, refining my understanding of
            distributed systems, and learning modern languages and frameworks
            that prioritize simplicity and developer experience.
          </p>

          <p>
            I approach development holistically, balancing architecture, user
            needs, and maintainability. My recent work and personal projects
            center around Node, Go, and TypeScript, with ongoing exploration of
            cloud platforms, containerization, and modern CI/CD pipelines.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 mt-12 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >

          <div className="neon-border border-neon-cyan/30 rounded-lg p-6 bg-card/20 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="text-neon-cyan w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-cyan">
                Backend
              </h3>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base">
              I design and maintain backend services in Node.js, Express, and Go.
              I also have years of experience building robust RESTful APIs with
              C#/.NET. My focus now is clean architecture, modular systems, and
              developer efficiency.
            </p>
          </div>

          <div className="neon-border border-neon-pink/30 rounded-lg p-6 bg-card/20 backdrop-blur-sm hover:border-neon-pink/50 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Layout className="text-neon-pink w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-pink">
                Frontend
              </h3>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base">
              With over six years of enterprise UI work in Angular (and some
              React), I value component design, maintainable patterns, and
              consistent architecture that scales across teams and products.
            </p>
          </div>

          <div className="neon-border border-neon-yellow/30 rounded-lg p-6 bg-card/20 backdrop-blur-sm hover:border-neon-yellow/50 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <BrainCircuit className="text-neon-yellow w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-yellow">
                Mindset
              </h3>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base">
              I emphasize code quality, testing, and mentorship, from reviewing
              pull requests to improving CI/CD pipelines. Learning Go and
              containerized workflows has reshaped how I approach performance,
              scalability, and reliability.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="neon-border border-neon-cyan/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm">
            <h3 className="text-2xl mb-4 text-neon-cyan">Always Learning</h3>
            <p className="text-foreground/80 leading-relaxed text-base">
              Technology evolves quickly, and I stay committed to continuous
              learning. I’m actively exploring Go concurrency patterns, refining
              my Node.js architecture skills, and deepening my understanding of
              distributed systems, observability, and performance optimization.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {['Go', 'Node.js', 'FastAPI', 'Docker', 'Azure', 'CI/CD'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
    </section>
  );
}
