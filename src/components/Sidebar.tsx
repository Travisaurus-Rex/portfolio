import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  return (
    <>
      {/* Desktop / large screens: fixed left column */}
      <aside className="hidden lg:flex w-1/3 max-w-xs sticky top-0 h-screen flex-col justify-between p-8 border-r border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold text-white">Travis Adams</h1>
          <p className="text-sm text-neutral-400 mt-2">Fullstack Software Engineer</p>
          <p className="mt-4 text-sm text-neutral-400">
            Building modern, scalable web apps
          </p>

          <nav className="mt-10 space-y-3">
            <a href="#about" className="block hover:text-[var(--color-neon-blue)]">About</a>
            <a href="#work" className="block hover:text-[var(--color-neon-blue)]">Work</a>
            <a href="#skills" className="block hover:text-[var(--color-neon-blue)]">Skills</a>
            <a href="#projects" className="block hover:text-[var(--color-neon-blue)]">Projects</a>
            <a href="#contact" className="block hover:text-[var(--color-neon-blue)]">Contact</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4 text-neutral-400">
          <a href="https://github.com/Travisaurus-Rex" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:tadamsdeveloper@gmail.com"><MdEmail /></a>
        </div>
      </aside>

      {/* Mobile header (only shown on small screens) */}
      <header className="lg:hidden sticky top-0 z-20 bg-[rgba(10,10,15,0.9)] backdrop-blur p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Travis Adams</h1>
          <nav className="hidden sm:flex space-x-4 text-sm text-neutral-300">
            <a href="#about" className="hover:text-[var(--color-neon-blue)]">About</a>
            <a href="#skills" className="hover:text-[var(--color-neon-blue)]">Skills</a>
            <a href="#projects" className="hover:text-[var(--color-neon-blue)]">Projects</a>
            <a href="#contact" className="hover:text-[var(--color-neon-blue)]">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}

