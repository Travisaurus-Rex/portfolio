'use client';

import { useEffect, useState } from 'react';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-cyan',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'React/Next.js', level: 80 },
      ]
    },
    {
      title: 'Backend',
      color: 'neon-pink',
      skills: [
        { name: 'C#/.NET', level: 94 },
        { name: 'Node.js', level: 92 },
        { name: 'GoLang', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'neon-green',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'AWS/Azure', level: 83 },
        { name: 'Docker', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-neon-purple neon-glow">Technical</span> <span className="text-neon-yellow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-yellow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="neon-border border-current p-8 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
              style={{ color: `var(--color-${category.color})` }}
            >
              <h3 className="text-2xl mb-6 neon-glow">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-sm text-current">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: `var(--color-${category.color})`,
                          boxShadow: `0 0 10px var(--color-${category.color})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="neon-border border-neon-cyan/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4 text-neon-cyan">Always Learning</h3>
            <p className="text-foreground/80 leading-relaxed">
              Technology evolves quickly, and I stay committed to learning tools and patterns that solve real problems. Lately, I&apos;ve been focused on improving my system design skills, exploring modern backend architectures, and deepening my understanding of cloud platforms and scalable API design.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {['GoLang', 'Web3', 'NextJS', 'GraphQL', 'Azure'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}