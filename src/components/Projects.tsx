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
  return (
    <section id="projects" className="projects">
      <div className="section">
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
      </div>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="card"
          >
            <div
              className="accent"
              style={{ background: getGradient(index) }}
            />

            <h3>{project.title}</h3>

            <p>{project.description.short}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
