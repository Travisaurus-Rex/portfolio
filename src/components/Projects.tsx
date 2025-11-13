import Image from "next/image";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {

  function makeColorCycler(colors: string[]): () => string {
    let index = 0;
    return function nextColor() {
      const color = colors[index];
      index = (index + 1) % colors.length;
      return color;
    };
  }

  const getNextColor = makeColorCycler(['secondary', 'accent', 'contrast']);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 section"
    >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start rounded-lg p-6 bg-card/20 backdrop-blur-sm transition-all duration-300"
            >
              <div className={`relative w-full md:w-[200px] aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-${getNextColor()})]`}>
                {project.images?.thumbnail ? (
                  <Image
                    src={project.images.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-light text-sm">
                    No image yet :&apos;(
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
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
                        className="px-3 py-1 text-xs rounded-full text-secondary border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}


                <div className="flex flex-wrap items-center gap-6 text-sm mt-2">
                  <Link href={`/projects/${project.slug}`} className="py-1 px-2 rounded-sm text-accent hover:bg-accent hover:text-[var(--color-text-dark)] border border-1 border-[var(--color-accent)]">View More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
