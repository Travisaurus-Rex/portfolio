'use client';

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

type ProjectHeroProps = {
  image: string;
};

export function ProjectHeader({ image }: ProjectHeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid bg-gradient-to-br from-neon-cyan/25 via-transparent to-neon-pink/25">
      <div className="neon-border border-neon-pink rounded-2xl overflow-hidden"><Image src={image} alt="Project image" width="800" height="300" /></div>
    </section>
  );
}
