import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neon-cyan/30 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-neon-pink fill-current animate-pulse-glow" />
            <span>and</span>
            <Code className="w-4 h-4 text-neon-cyan" />
            <span>by Travis Adams</span>
          </div>
          
          <div className="glitch-text text-neon-cyan" data-text="&lt;/Travis&gt;">
            &lt;/Travis&gt;
          </div>
          
          <p className="text-foreground/60 text-sm">
            © {currentYear} Travis Adams. All rights reserved. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}