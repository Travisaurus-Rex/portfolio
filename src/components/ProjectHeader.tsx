'use client';

import Image from 'next/image';

type ProjectHeroProps = {
  desktopImg: string;
  mobileImg: string;
  alt: string;
};

/*

export function ProjectHeader({ image }: ProjectHeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid bg-gradient-to-br from-neon-cyan/25 via-transparent to-neon-pink/25">
      <div className="neon-border border-neon-pink rounded-2xl overflow-hidden"><Image src={image} alt="Project image" width="800" height="300" /></div>
    </section>
  );
}

*/

export function ProjectHeader({ desktopImg, mobileImg, alt }: ProjectHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-900 to-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-neutral-800 p-6 lg:p-12">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500 opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="flex justify-center w-full py-10 px-4">
        <div className="relative max-w-4xl w-full">
          {/* Desktop Screenshot */}
          <img
            src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=1200&h=800&fit=crop"
            alt="Desktop Screenshot"
            className="w-full rounded-xl shadow-lg"
          />

          {/* Mobile Screenshot */}
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&h=1000&fit=crop"
            alt="Mobile Screenshot"
            className="absolute w-1/4 bottom-[-2rem] right-[-2rem] rounded-xl shadow-xl border border-neutral-800 z-10"
          />
        </div>
      </div>

    </div>
  );
} 
