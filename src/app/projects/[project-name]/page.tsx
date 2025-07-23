'use client';

import { ProjectHeader } from '@/components/ProjectHeader';
import { projects } from '@/lib/data';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
    const params = useParams();
    const _slug = params['project-name'];
    const project = projects.find(p => p.slug == _slug);

    if (!project) return <div>Not found</div>;

    return (
    <>
      <ProjectHeader image={project.image} />
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <h1 className="text-8xl font-medium mb-4 mb-24">
          {project.title}
        </h1>
        {/* About the Project */}
        <div>
          <h2 className="text-3xl font-medium mb-4 text-neon-cyan">About the Project</h2>
          { project.description.about.map((para, index) => {
              return <p key={index} className="text-foreground/80 leading-relaxed mb-6">{para}</p>
            })
          }
        </div>

        {/* How It Was Built */}
        <div>
          <h2 className="text-3xl font-medium mb-4 text-neon-green">How It Was Built</h2>
            { project.description.howItWasBuilt.map((para, index) => {
                return <p key={index} className="text-foreground/80 leading-relaxed mb-6">{para}</p>
              })
            }
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-medium mb-4 text-neon-pink">Key Features</h2>
          <ul className="list-disc list-inside text-foreground/80 space-y-2">
            { project.description.keyFeatures.map((para, index) => {
              return <li key={`${index}_${project.slug}`}>{para}</li>
              })
            }
          </ul>
        </div>
      </section>
    </>
  );
}