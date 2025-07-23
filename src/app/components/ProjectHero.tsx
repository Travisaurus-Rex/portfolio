'use client';

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

type ProjectHeroProps = {
  title: string;
  tagline: string;
  image: string;
  github?: string;
  live?: string;
};

export function ProjectHero({ title, tagline, image, github, live }: ProjectHeroProps) {
  return (
    <div>Placeholder</div>
  );
}
