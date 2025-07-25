'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon  } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '@/context/theme-context';

type HeaderProps = {
  hideLinks?: boolean
}

export function Header({ hideLinks = false}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neon-cyan/30">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="glitch-text neon-glow text-neon-cyan" data-text="&lt;Travis/&gt;">
          &lt;Travis/&gt;
        </div>

        {/* Desktop Navigation */}
        { !hideLinks && 
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group text-foreground hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="neon-border bg-card/80 hover:bg-card/90 light-shadow"
            >
              {theme == 'dark' ? (
                <Sun className="h-4 w-4 text-neon-yellow" />
              ) : (
                <Moon className="h-4 w-4 text-neon-purple" />
              )}
            </Button>
          </div>
        }
      
        {/* Mobile Menu Button */}
        { !hideLinks &&
          <button
            className="md:hidden text-neon-cyan hover:text-neon-pink transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        }
        
        { hideLinks && (
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="neon-border bg-card/80 hover:bg-card/90 light-shadow"
          >
            {theme == 'dark' ? (
              <Sun className="h-4 w-4 text-neon-yellow" />
            ) : (
              <Moon className="h-4 w-4 text-neon-purple" />
            )}
          </Button>
        )}
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-neon-cyan/30 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-foreground hover:text-neon-cyan transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}