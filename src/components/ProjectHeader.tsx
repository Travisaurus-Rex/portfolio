'use client';
import { useTheme } from '@/context/theme-context';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type ProjectHeroProps = {
  desktopImg: string;
  mobileImg: string;
  alt: string;
};

export function ProjectHeader({ desktopImg, mobileImg, alt }: ProjectHeroProps) {
  const { theme } = useTheme();
  return (
    <div className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-lg border border-border p-6 sm:p-4",
        theme == 'dark'
          ? "bg-gradient-to-br from-black via-neutral-900 to-background"
          : "bg-gradient-to-br from-neon-cyan/50 via-neon-green to-neon-pink/50"
      )}>

      <div className="flex justify-center w-full py-10 px-4">
        <div className="relative max-w-4xl w-full">
          {/* Desktop Screenshot */}
          <Image width="800" height="400"
            src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=1200&h=800&fit=crop"
            alt="Desktop Screenshot"
            className="w-full rounded-xl shadow-2xl"
          />

          {/* Mobile Screenshot */}
          <Image width="800" height="400"
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&h=1000&fit=crop"
            alt="Mobile Screenshot"
            className="absolute w-1/4 bottom-[-2rem] right-[-2rem] rounded-xl shadow-lg z-10"
          />
        </div>
      </div>
    </div>
  );
} 
