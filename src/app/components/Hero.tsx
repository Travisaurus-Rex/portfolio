'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Software Engineer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Travis_Adams_Resume.pdf";
    link.download = "travis_adams_awesome_resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-pink/5">
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-cyan rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-neon-pink rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-neon-purple rounded-full animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
            <span className="glitch-text neon-glow text-neon-cyan" data-text="TRAVIS">
              TRAVIS
            </span>
            <br />
            <span className="text-neon-pink">ADAMS</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-foreground/80 h-8">
            <span className="text-neon-green">&gt;</span> {text}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technology.
            Specializing in React, Node.js, and cloud architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center z-1">
            <button 
              onClick={() => scrollToSection('projects')}
              className="neon-border text-neon-cyan border-neon-cyan px-8 py-3 rounded-lg hover:bg-neon-cyan/10 transition-all duration-300 neon-glow"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-neon-pink/20 text-neon-pink border border-neon-pink px-8 py-3 rounded-lg hover:bg-neon-pink/30 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button 
              onClick={handleDownload}
              className="bg-neon-green/20 text-neon-green border border-neon-green px-8 py-3 rounded-lg hover:bg-neon-green/30 transition-all duration-300"
            >
              Download My Resume
            </button>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neon-cyan animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}