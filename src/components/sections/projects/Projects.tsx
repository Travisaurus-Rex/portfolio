import "./Projects.css";
import { projects } from "@/lib/data";
import Link from "next/link";

const gradients = [
  "linear-gradient(135deg, #EB3678, #7C3AED)",
  "linear-gradient(135deg, #FFCC00, #EB3678)",
  "linear-gradient(135deg, #3DC2EC, #7C3AED)",
  "linear-gradient(135deg, #3DC2EC, #EB3678)",
  "linear-gradient(135deg, #7C3AED, #EB3678)",
  "linear-gradient(135deg, #EB3678, #3DC2EC)",
];

function getGradient(index: number) {
  return gradients[index % gradients.length];
}

export default function Projects() {
  const showTags = true;
  return (
    <section id="projects" className="projects">
      <div className="section">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">Projects</h2>
      </div>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="card popout popout-noclick"
          >
            <div
              className="accent"
              style={{ background: getGradient(index) }}
            />

            <h3 className="font-bold">{project.title}</h3>

            <p>{project.description.short}</p>
            {showTags && (
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {!showTags && (
              <button className="popout popout-btn self-start mt-auto">
                View More
              </button>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
