import { Heart, Code } from 'lucide-react';

export function Footer() {
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
          
          <div className="glitch-text text-neon-cyan" data-text="&lt;/DEV&gt;">
            &lt;/DEV&gt;
          </div>
          
          <p className="text-foreground/60 text-sm">
            © {currentYear} Travis Adams. All rights reserved. Built with React & TypeScript.
          </p>
          
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-neon-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-neon-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-neon-cyan transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}