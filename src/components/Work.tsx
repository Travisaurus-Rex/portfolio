// src/components/Work.tsx
export default function Work() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "CXtec",
      link: "https://www.cxtec.com/",
      range: "Mar 2024 – Apr 2025",
      bullets: [
        "Built and maintained backend services using Node.js, TypeScript, and .NET APIs to support internal and customer-facing workflows.",
        "Developed Angular and React interfaces that integrated cleanly with modular backend endpoints.",
        "Designed and integrated REST/GraphQL endpoints, improving data flow and performance across applications.",
        "Modernized legacy systems through modular architecture, reusable services, and structured API contracts.",
        "Collaborated with distributed teams to deliver reliable backend functionality for enterprise workflows."
      ],
      tech: ["Node", "TypeScript", ".NET", "Angular", "React", "GraphQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Meyer Distributing",
      link: "https://www.meyerdistributing.com/",
      range: "Jan 2019 – Mar 2024",
      bullets: [
        "Built and maintained Node.js/TypeScript APIs powering logistics, ordering, and warehouse systems.",
        "Implemented backend logic, data models, and integrations for Angular/Ionic apps used in daily operations.",
        "Partnered with backend engineers to design scalable REST endpoints and improve SQL query performance.",
        "Mentored developers on TypeScript patterns, reusable service design, and full-stack architecture."
      ],
      tech: ["Node", "TypeScript", "Angular", "Ionic", "SQL Server", ".NET"],
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
                  <li key={i}>{b}</li>
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
