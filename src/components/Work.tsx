// src/components/Work.tsx
export default function Work() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "CXtec",
      link: "https://www.cxtec.com/",
      range: "Mar 2024 – Apr 2025",
      bullets: [
        "Contributed to the modernization of CXtec’s enterprise ordering and operations platforms, improving long-term reliability, usability, and maintainability.",
        "Delivered full-stack features across Angular and React applications, owning UI behavior, API integration, and backend logic used in daily workflows.",
        "Improved backend services and control-plane integrations, strengthening reliability, performance, and observability across distributed systems.",
        "Worked cross-functionally with design, operations, and platform teams to diagnose complex production issues and streamline mission-critical workflows.",
        "Helped maintain architectural consistency across large, evolving codebases, ensuring scalable patterns for frontend, APIs, and infrastructure-adjacent systems."
      ],
      tech: ["Angular", "TypeScript", ".NET", "Node", "React", "GraphQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Meyer Distributing",
      link: "https://www.meyerdistributing.com/",
      range: "Jan 2019 – Mar 2024",
      bullets: [
        "Rebuilt the company’s full B2B e-commerce platform from the ground up, delivering a modern web + mobile experience that became the primary driver of company revenue.",
        "Helped design and deliver a new B2C e-commerce experience, shipping multiple iterations and improving reliability, customer flows, and system performance.",
        "Built internal operational tools used daily by 1,000+ employees, supporting essential business functions across logistics, inventory, ordering, and customer service.",
        "Contributed to architecture and technical direction, designing scalable backend patterns and frontend experiences used across multiple high-traffic systems.",
        "Mentored developers on maintainability, scalable backend patterns, debugging practices, and modern TypeScript development."
      ],
      tech: ["Angular", "Ionic", "TypeScript", ".NET", "Node", "SQL Server",],
    },
    {
      title: "Full Stack Developer",
      company: "Independent",
      range: "July 2016 – Jan 2019",
      bullets: [
        "Built client websites using WordPress and custom themes.",
        "Optimized SEO and site performance for small businesses.",
      ],
      tech: ["WordPress", "SEO", "PHP", "JavaScript"],
    },
    {
      title: "Front End Developer Intern",
      company: "Rapsew",
      range: "Mar 2016 – July 2016",
      bullets: [
        "Assisted in UI development and feature implementation.",
        "Collaborated with senior developers on debugging and testing.",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="work" className="mx-auto px-4 py-16 section">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-12">
        {jobs.map((job, idx) => (
          <div key={idx} className="grid grid-cols-6 gap-6">

            <div className="col-span-2 text-sm font-mono uppercase tracking-wide">
              {job.range}
            </div>


            <div className="col-span-4 space-y-4">
              <h3 className="font-semibold text-lg">
                {job.title} ·{" "}
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>

              <ul className="list-disc list-inside space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="list-outside mb-3">{b}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border text-[var(--color-secondary)] py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
