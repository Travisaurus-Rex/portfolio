'use client';

import { ProjectHero } from '@/app/components/ProjectHero';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
    const params = useParams();
    const projectName = params['project-name'];

    return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <h1 className="text-8xl font-medium mb-4 mb-24">
          Omni Outdoor Living
        </h1>
        {/* About the Project */}
        <div>
          <h2 className="text-3xl font-medium mb-4 text-neon-cyan">About the Project</h2>
          <p className="text-foreground/80 leading-relaxed">
            This project was built to solve XYZ problems using cutting-edge technologies and modern best practices.
            It features responsive design, accessibility support, and smooth user interactions.
          </p>
        </div>

        {/* How It Was Built */}
        <div>
          <h2 className="text-3xl font-medium mb-4 text-neon-green">How It Was Built</h2>
          <p className="text-foreground/80 leading-relaxed">
            The backend uses Node.js with Express, while the frontend leverages React and Tailwind CSS.
            Real-time functionality is powered by WebSockets, and authentication is handled with JWT tokens.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-medium mb-4 text-neon-pink">Key Features</h2>
          <ul className="list-disc list-inside text-foreground/80 space-y-2">
            <li>Real-time updates and collaboration</li>
            <li>Dark mode and accessibility support</li>
            <li>Optimized for mobile and desktop</li>
            <li>Clean, intuitive UI with neon styling</li>
          </ul>
        </div>
      </section>
    </>
  );
}