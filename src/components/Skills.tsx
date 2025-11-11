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
          I’m a software engineer focused on building reliable, performant systems with modern tools like 
          <span className="text-accent"> Go</span>, <span className="text-accent"> Node.js</span>, and 
          <span className="text-accent"> Python</span>. My recent work includes designing scalable APIs, 
          experimenting with <span className="text-accent"> FastAPI</span> backends, and developing 
          intelligent services that integrate <span className="text-accent"> AI agents</span> and 
          machine learning models directly into real-world applications.
        </p>

        <p>
          I bring more than six years of enterprise experience and nine years total in software development. 
          My foundation in <span className="text-accent"> Angular</span> and <span className="text-accent"> .NET </span> 
          taught me how to deliver large-scale systems that emphasize stability, maintainability, and collaboration. 
          That background allows me to adopt and master new technologies quickly while keeping projects grounded in 
          clear architecture and strong engineering principles.
        </p>

        <p>
          Whether I’m optimizing backend performance, refining API design, or experimenting with 
          <span className="text-accent"> AI-driven architectures</span>, I focus on creating software that is fast, 
          maintainable, and human-centered.
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
              <h3 className="text-xl font-semibold text-neon-cyan">
                Backend
              </h3>
            </div>
            <p className="leading-relaxed text-base">
              I design and maintain backend services in Node.js, Express, and Go.
              I also have years of experience building robust RESTful APIs with
              C#/.NET. My focus now is clean architecture, modular systems, and
              developer efficiency.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <Layout className="text-neon-pink w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-pink">
                Frontend
              </h3>
            </div>
            <p className="leading-relaxed text-base">
              With over six years of enterprise UI work in Angular and
              React, I value component design, maintainable patterns, and
              consistent architecture that scales across teams and products.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <BrainCircuit className="text-neon-yellow w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-yellow">
                Mindset
              </h3>
            </div>
            <p className="leading-relaxed text-base">
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
