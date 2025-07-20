import { ExternalLink, Github, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Not by the Cover',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/Travisaurus-Rex/not-by-the-cover',
      live: '',
      featured: true
    },
    {
      title: 'React Native App (Working Title)',
      description: 'Real-time chat application with AI integration using OpenAI API. Built with Next.js, Socket.io, and MongoDB for message persistence.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
      tags: ['React Native', 'Expo', 'Socket.io', 'Supabase'],
      github: 'https://github.com/Travisaurus-Rex/shopping-list',
      live: '',
      featured: true
    },
    {
      title: 'Untitled',
      description: 'Monitoring dashboard for CI/CD pipelines with real-time metrics and alerts. Built with Vue.js and connected to various DevOps tools via APIs.',
      image: '',
      tags: [],
      github: 'https://github.com',
      live: '',
      featured: false
    },
    {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting application built on Ethereum blockchain. Features smart contracts, Web3 integration, and transparent vote counting.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      tags: ['Solidity', 'Web3.js', 'React', 'IPFS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization platform for business analytics. Built with React, D3.js, and Python backend for data processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

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
              { project.image &&
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              }
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-neon-cyan neon-glow">{project.title}</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {project.description}
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
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-neon-cyan hover:text-neon-pink transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  { project.live &&
                    <a
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
                  <a
                    href={project.github}
                    className="text-neon-cyan hover:text-neon-pink transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-neon-green hover:text-neon-yellow transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h4 className="mb-3 text-neon-cyan">{project.title}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded bg-neon-yellow/20 text-neon-yellow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}