"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  hideLinks?: boolean;
};

export default function Header({ hideLinks = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sidebar backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[var(--color-accent)] font-semibold text-xl tracking-wide">
          &lt;Travis/&gt;
        </div>

        {/* Desktop Navigation */}
        {!hideLinks && (
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer capitalize"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Toggle */}
        {!hideLinks && (
          <button
            className="md:hidden text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[var(--color-primary)]/98 backdrop-blur-md border-b border-[var(--color-contrast)]/30 md:hidden">
            <div className="px-6 py-4 flex flex-col space-y-4">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
