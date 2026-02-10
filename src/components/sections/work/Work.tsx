export default function Work() {
  const showTags = false;
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "CodedByTravis",
      link: "https://www.codedbytravis.com/",
      range: "June 2025 – Present",
      bullets: [
        "Architected multi-tenant ecommerce platform using NestJS and PostgreSQL, implementing tenant isolation, RBAC, and API rate limiting to support 50+ concurrent organizations with strict data segregation",
        "Built real-time event system and WebSocket infrastructure enabling live updates across distributed clients, reducing data staleness and creating reusable SDK for third-party platform integrations",
        "Designed RESTful APIs and database schemas for commerce and fitness applications, optimizing query performance with indexing strategies and caching layers that reduced average response time to <200ms",
        "Established Docker-based deployment pipeline with GitHub Actions CI/CD, automating testing, building, and deployment workflows to reduce release cycles from manual processes to push-to-deploy",
      ],
      tech: ["React", "Next.js", "Node", "NestJS", "GoLang", "PostgreSQL"],
    },
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
        "Helped maintain architectural consistency across large, evolving codebases, ensuring scalable patterns for frontend, APIs, and infrastructure-adjacent systems.",
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
        "Mentored developers on maintainability, scalable backend patterns, debugging practices, and modern TypeScript development.",
      ],
      tech: ["Angular", "Ionic", "TypeScript", ".NET", "Node", "SQL Server"],
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
          <div
            key={idx}
            className="grid grid-cols-4 gap-2 md:grid-cols-8 md:gap-4"
          >
            <div className="col-span-2 max-md:col-span-6 text-2xl md:text-sm font-mono uppercase tracking-wide">
              {job.range}
            </div>

            <div className="col-span-6 max-md:col-span-6 space-y-4">
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
                  <li key={i} className="list-outside mb-3 max-md:ml-6">
                    {b}
                  </li>
                ))}
              </ul>
              {showTags && (
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t, i) => (
                    <span key={i} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
