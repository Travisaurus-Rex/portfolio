'use client';

import Header from '@/components/Header';
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
      <Header hideLinks={true} />
      <div className="pt-16">
        <ProjectHeader desktopImg={project.images.mainDesktop} mobileImg={project.images.mainMobile} alt="project"/>
      </div>
      <section className="max-w-6xl mx-auto px-3 md:px-6 py-8 md:py-16 space-y-8 md:space-y-16">
        <h1 className="text-3xl lg:text-8xl md:text-6xl font-medium mb-8 md:mb-16">
          {project.title}
        </h1>
        {/* About the Project */}
        <div>
          <h2 className="text-xl lg:text-3xl md:text-2xl font-medium mb-4 text-neon-cyan ">About the Project</h2>
          { project.description.about.map((para, index) => {
              return <p key={index} className="text-md lg:text-xl sm:text-lg text-foreground/80 leading-relaxed mb-6">{para}</p>
            })
          }
        </div>

        {/* How It Was Built */}
        <div>
          <h2 className="text-xl lg:text-3xl md:text-2xl font-medium mb-4 text-neon-green">How It Was Built</h2>
            { project.description.howItWasBuilt.map((para, index) => {
                return <p key={index} className="text-md sm:text-xl text-foreground/80 leading-relaxed mb-6">{para}</p>
              })
            }
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl lg:text-3xl md:text-2xl font-medium mb-4 text-neon-pink">Key Features</h2>
          <ul className="text-md sm:text-xl list-disc list-inside text-foreground/80 space-y-2">
            { project.description.keyFeatures.map((para, index) => {
              return <li key={index}>{para}</li>
              })
            }
          </ul>
        </div>

        <div className="mt-6 space-x-4 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-start">
          <a target='_blank'
            href={project.live}
            className="bg-neon-cyan/20 text-neon-cyan border border-neon-cyan px-8 py-3 rounded-lg hover:bg-neon-cyan/30 transition-all duration-300 cursor-pointer"
          >
            Visit Site
          </a>
          { project.android && 
            <a target='_blank'
              href={project.android}
              className="bg-neon-pink/20 text-neon-pink border border-neon-pink px-8 py-3 rounded-lg hover:bg-neon-pink/30 transition-all duration-300 cursor-pointer"
            >
              Play Store
            </a>
          }
          { project.ios && 
            <a target='_blank'
              href={project.ios}
              className="bg-neon-green/20 text-neon-green border border-neon-green px-8 py-3 rounded-lg hover:bg-neon-green/30 transition-all duration-300 cursor-pointer"
            >
              Apple Store
            </a>
          }
        </div>
      </section>
    </>
  );
}