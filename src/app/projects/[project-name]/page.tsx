"use client";

import Header from "@/components/Header";
import { ProjectHeader } from "@/components/ProjectHeader";
import { projects } from "@/lib/data";
import { useParams } from "next/navigation";
import { Github } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const _slug = params["project-name"];
  const project = projects.find((p) => p.slug === _slug);

  if (!project)
    return <div className="p-12 text-center">Project not found</div>;

  // 🧩 Normalize GitHub links: handle string or object
  const githubLinks =
    typeof project.github === "object"
      ? project.github
      : project.github
      ? { repo: project.github }
      : null;

  return (
    <>
      <Header hideLinks={true} />
      <div className="pt-16">
        <ProjectHeader
          desktopImg={project.images.mainDesktop}
          mobileImg={project.images.mainMobile}
          alt={project.title}
        />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16 text-[var(--color-text-light)]">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--color-contrast)]">
          {project.title}
        </h1>

        {/* About */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--color-accent)]">
            About the Project
          </h2>
          {project.description.about.map((para, index) => (
            <p
              key={index}
              className="text-lg md:text-xl leading-relaxed text-[var(--color-text-light)]/90 mb-6"
            >
              {para}
            </p>
          ))}
        </div>

        {/* How It Was Built */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--color-contrast)]">
            How It Was Built
          </h2>
          {project.description.howItWasBuilt.map((para, index) => (
            <p
              key={index}
              className="text-lg md:text-xl leading-relaxed text-[var(--color-text-light)]/90 mb-6"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--color-accent)]">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-[var(--color-text-light)]/90">
            {project.description.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Links section */}
        <div className="mt-10 flex flex-wrap gap-4">
          {/* Live site */}
          {project.live && (
            <a
              target="_blank"
              href={project.live}
              className="border border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 px-8 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
            >
              Visit Site
            </a>
          )}

          {/* Android */}
          {project.android && (
            <a
              target="_blank"
              href={project.android}
              className="border border-[var(--color-contrast)] text-[var(--color-contrast)] bg-[var(--color-contrast)]/10 hover:bg-[var(--color-contrast)]/20 px-8 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
            >
              Play Store
            </a>
          )}

          {/* iOS */}
          {project.ios && (
            <a
              target="_blank"
              href={project.ios}
              className="border border-[var(--color-secondary)] text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 hover:bg-[var(--color-secondary)]/20 px-8 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
            >
              Apple Store
            </a>
          )}

          {/* GitHub links */}
          {githubLinks && (
            <div className="flex flex-wrap gap-3">
              {"frontend" in githubLinks && (
                <a
                  target="_blank"
                  href={githubLinks.frontend}
                  className="flex items-center gap-2 border border-[var(--color-text-light)]/40 text-[var(--color-text-light)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
                >
                  <Github size={18} />
                  <span>Frontend Code</span>
                </a>
              )}
              {"backend" in githubLinks && (
                <a
                  target="_blank"
                  href={githubLinks.backend}
                  className="flex items-center gap-2 border border-[var(--color-text-light)]/40 text-[var(--color-text-light)] hover:text-[var(--color-contrast)] hover:border-[var(--color-contrast)] px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
                >
                  <Github size={18} />
                  <span>Backend Code</span>
                </a>
              )}
              {"repo" in githubLinks && (
                <a
                  target="_blank"
                  href={githubLinks.repo}
                  className="flex items-center gap-2 border border-[var(--color-text-light)]/40 text-[var(--color-text-light)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
                >
                  <Github size={18} />
                  <span>GitHub Repo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
