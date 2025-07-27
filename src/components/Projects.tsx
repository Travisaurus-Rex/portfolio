import { ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import Link from 'next/link';

export function Projects() {
  const displayAdditonalProjects = true;
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-neon-green neon-glow">Featured</span> <span className="text-neon-cyan">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="neon-border border-neon-cyan/30 rounded-lg overflow-hidden bg-card/20 backdrop-blur-sm hover:border-neon-cyan transition-all duration-300 group"
            >
              {/*
              { project.image &&
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              }
              */}
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-neon-cyan">{project.title}</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {project.description.short}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  { project.github && 
                    <a target='_blank'
                      href={project.github}
                      className="neon-border bg-neon-cyan/20 px-3 py-2 rounded-md mt-4 flex items-center space-x-2 text-neon-cyan hover:text-neon-pink hover:bg-neon-pink/20 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  }
                  { project.live &&
                    <a target='_blank'
                      href={project.live}
                      className="flex items-center space-x-2 text-neon-green hover:text-neon-yellow transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        { displayAdditonalProjects &&
          <>
            <div className="mb-8">
              <h3 className="text-2xl mb-8 text-center">
                <span className="text-neon-pink">Other</span> <span className="text-neon-yellow">Projects</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="neon-border border-neon-pink/30 rounded-lg p-6 bg-card/20 backdrop-blur-sm hover:border-neon-pink transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Code className="w-8 h-8 text-neon-pink group-hover:text-neon-cyan transition-colors" />
                    <div className="flex space-x-3">
                      { project.github && 
                        <a target='_blank'
                          href={project.github}
                          className="text-neon-cyan hover:text-neon-pink transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      }
                      { project.live &&
                        <a target='_blank'
                          href={project.live}
                          className="text-neon-green hover:text-neon-yellow transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      }
                    </div>
                  </div>
                  
                  <h4 className="mb-3 text-neon-cyan">{project.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {project.description.short}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-neon-yellow/20 text-neon-yellow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <button className="cursor-pointer neon-border bg-neon-cyan/20 px-3 py-2 rounded-md mt-4 flex items-center space-x-2 text-neon-cyan hover:text-neon-pink hover:bg-neon-pink/20 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
        </>
      }
      </div>
    </section>
  );
}