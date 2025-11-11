'use client';
import Image from 'next/image';

type ProjectHeroProps = {
  desktopImg?: string;
  mobileImg?: string;
  alt: string;
};

export function ProjectHeader({ desktopImg, mobileImg, alt }: ProjectHeroProps) {
  if (!desktopImg && !mobileImg) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-accent)_0%,transparent_70%)] opacity-30" />

      <div className="relative flex justify-center items-center px-4 sm:px-8">
        <div className="relative max-w-5xl w-full">
          {desktopImg && (
            <Image
              width={1200}
              height={700}
              src={desktopImg}
              alt={alt || 'Desktop Screenshot'}
              className="w-full rounded-lg shadow-xl"
            />
          )}

          {mobileImg && (
            <Image
              width={400}
              height={800}
              src={mobileImg}
              alt={alt || 'Mobile Screenshot'}
              className="absolute bottom-[-2rem] right-[-2rem] w-1/4 min-w-[140px] rounded-lg shadow-xl border border-[var(--color-primary)]/20 transform hover:scale-105 transition-transform duration-500"
              style={{
                boxShadow:
                  '0 8px 24px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.08)',
              }}
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-contrast)] to-transparent opacity-70" />
    </div>
  );
}

