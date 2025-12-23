"use client";

import Logo from "./Logo";
import { LinkShelf } from "./LinkShelf";
import { DevName } from "./DevName";

export default function Sidebar() {
  return (
    <>
      <aside className="hidden lg:flex lg:flex-none lg:w-[22rem] sticky top-0 h-screen flex-col justify-between px-8 py-16 bg-sidebar border-r border-neutral-800">
        <Logo />

        <nav className="space-y-4 mt-16">
          {["about", "skills", "work", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="block text-3xl font-thin text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors duration-150"
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <LinkShelf />
      </aside>

      <header className="lg:hidden sticky top-0 z-20 bg-sidebar p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <DevName />
          <LinkShelf />
        </div>
      </header>
    </>
  );
}
