import { ExternalLink, Github, Smartphone } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 section"
    >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start neon-border border-neon-cyan/20 rounded-lg p-6 bg-card/20 backdrop-blur-sm hover:border-neon-cyan/40 transition-all duration-300"
            >
              <div className="relative w-full md:w-[200px] aspect-[4/3] rounded-md overflow-hidden bg-neutral-900/40">
                {project.images?.thumbnail ? (
                  <Image
                    src={project.images.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-neutral-600 text-sm">
                    No image
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neon-cyan mb-2">
                  {project.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  {project.description.short}
                </p>

                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}


                <div className="flex flex-wrap items-center gap-6 text-sm mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-neon-cyan hover:text-neon-pink transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-neon-green hover:text-neon-yellow transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.android && (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-[#3ddc84] hover:text-neon-yellow transition-colors"
                    >
                      <Smartphone size={18} />
                      <span>Android</span>
                    </a>
                  )}

                  {project.ios && (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-neutral-200 hover:text-neon-yellow transition-colors"
                    >
                      <Smartphone size={18} />
                      <span>iOS</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
