'use client';
import Image from 'next/image';

type ProjectHeroProps = {
  desktopImg: string;
  mobileImg: string;
  alt: string;
};

export function ProjectHeader({ desktopImg, mobileImg, alt }: ProjectHeroProps) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-border p-6 sm:p-4">

      <div className="flex justify-center w-full py-10 px-4">
        <div className="relative max-w-4xl w-full">
          <Image width="800" height="400"
            src={desktopImg}
            alt={alt || 'Desktop Screenshot'}
            className="w-full rounded-xl shadow-dark-lg border-2 border-cyan"
            style={{ boxShadow: '0 10px 15px rgba(0,0,0,0.5)' }}
          />

          <Image width="800" height="400"
            src={mobileImg}
            alt={ alt || 'Mobile Screenshot'}
            className="absolute w-1/4 bottom-[-2rem] right-[-2rem] rounded-xl shadow-dark-lg z-10 border-2 border-cyan"
            style={{ boxShadow: '0 10px 15px rgba(0,0,0,0.5)' }}
          />
        </div>
      </div>
    </div>
  );
} 
