"use client";

import Header from "@/components/Header";
import { ProjectHeader } from "@/components/ProjectHeader";
import { projects } from "@/lib/data";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const _slug = params["project-name"];
  const project = projects.find((p) => p.slug === _slug);

  if (!project)
    return <div className="p-12 text-center text-[var(--color-text-light)]">Project not found</div>;

  return (
    <>
      <Header hideLinks={true} />

      <div className="pt-10">
        <ProjectHeader
          desktopImg={project.images.mainDesktop}
          mobileImg={project.images.mainMobile}
          alt={project.title}
        />
      </div>

      <section className="section space-y-16 text-[var(--color-text-light)]">
        {/* Title */}
        <h1 className="text-6xl md:text-6xl font-bold">
          {project.title}
        </h1>

        {/* About */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">About the Project</h2>
          {project.description.about.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-[var(--color-text-light)]/90 mb-6">
              {para}
            </p>
          ))}
        </div>

        {/* How It Was Built */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">How It Was Built</h2>
          {project.description.howItWasBuilt.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-[var(--color-text-light)]/90 mb-6">
              {para}
            </p>
          ))}
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[var(--color-text-light)]/90">
            {project.description.keyFeatures.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-md rounded-full text-secondary border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          {project.live && (
            <a
              target="_blank"
              href={project.live}
              className="px-8 py-3 rounded-md border border-[var(--color-accent)] text-accent hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)] transition-all duration-300"
            >
              Visit Site
            </a>
          )}

          {project.github && project.github.monorepo && (
            <a
              target="_blank"
              href={project.github.monorepo}
              className="px-8 py-3 rounded-md border border-[var(--color-accent)] text-accent hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)] transition-all duration-300"
            >
              GitHub
            </a>
          )}

          {project.github && typeof project.github === "object" && (
            <>
              {project.github.frontend && (
                <a
                  target="_blank"
                  href={project.github.frontend}
                  className="px-8 py-3 rounded-md border border-[var(--color-accent)] text-accent hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)] transition-all duration-300"
                >
                  Frontend
                </a>
              )}
              {project.github.backend && (
                <a
                  target="_blank"
                  href={project.github.backend}
                  className="px-8 py-3 rounded-md border border-[var(--color-accent)] text-accent hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)] transition-all duration-300"
                >
                  Backend
                </a>
              )}
            </>
          )}

          {project.android && (
            <a
              target="_blank"
              href={project.android}
              className="px-8 py-3 rounded-md border border-[var(--color-accent)] text-accent hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)] transition-all duration-300"
            >
              Play Store
            </a>
          )}

          {project.ios && (
            <a
              target="_blank"
              href={project.ios}
              className="px-8 py-3 rounded-md border border-[var(--color-accent)] text-accent hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)] transition-all duration-300"
            >
              App Store
            </a>
          )}
        </div>

      </section>
    </>
  );
}
