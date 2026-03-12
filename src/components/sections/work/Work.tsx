export default function Work() {
  const showTags = true;
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "CodedByTravis",
      link: "https://www.codedbytravis.com/",
      range: "June 2025 – Present",
      bullets: [
        "Architected and built an AI-powered Indonesian morphology dictionary (Next.js, MongoDB, Mongoose) leveraging the Claude API with prompt-engineered structured output, multikey-indexed document retrieval, and LangChain-compatible RAG patterns for context-grounded word analysis and sentence decomposition.",
        "Architected and built multi-tenant ecommerce platforms from system design to deployment, implementing strict tenant isolation, role-based access control, and organization-level configuration across a shared infrastructure.",
        "Designed and integrated payment processing flows into the multi-tenant architecture, handling subscription management, transactional payments, and webhook-driven reconciliation across isolated tenant environments.",
        "Engineered a real-time application layer using WebSockets and event-driven patterns to synchronize live data across distributed clients with minimal latency.",
        "Built a reusable real-time SDK that allowed external systems and third-party clients to subscribe to live platform events securely.",
        "Modeled relational schemas and optimized high-frequency queries with indexing and caching strategies to maintain sub-200ms response times under concurrent load.",
        "Implemented containerized deployment and CI/CD automation pipelines, enabling predictable push-to-deploy releases and safer production rollouts.",
      ],
      tech: ["React", "Next.js", "Node", "NestJS", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Senior Software Engineer",
      company: "CXtec",
      link: "https://www.cxtec.com/",
      range: "Mar 2024 – Apr 2025",
      bullets: [
        "Took full ownership of a legacy enterprise ordering system and led its rebuild and modernization, improving reliability, maintainability, and long-term scalability across a revenue-critical platform.",
        "Designed and implemented frontend and backend architecture for key ordering and operational workflows used daily by internal teams and customers.",
        "Migrated legacy patterns to modern Angular and React implementations while preserving business continuity and minimizing production risk.",
        "Improved API contracts and backend integrations to increase system stability and reduce production defects in high-traffic operational flows.",
        "Diagnosed and resolved complex cross-system production issues, acting as the primary engineering point of contact for platform-critical incidents.",
        "Established consistent frontend patterns and architectural guardrails across evolving applications to support long-term team velocity.",
      ],
      tech: ["Angular", "TypeScript", ".NET", "Node", "React", "GraphQL"],
    },
    {
      title: "Front End Developer",
      company: "Meyer Distributing",
      link: "https://www.meyerdistributing.com/",
      range: "Jan 2019 – Mar 2024",
      bullets: [
        "Rebuilt a revenue-critical B2B ecommerce platform while simultaneously modernizing internal logistics systems that coordinated warehouse operations and last-mile delivery.",
        "Engineered a mobile delivery application used by drivers in the field, integrating route optimization via Google Maps, real-time GPS tracking, barcode scanning for inventory verification, and touch-based signature capture for proof of delivery.",
        "Designed systems that synchronized warehouse inventory, order status, and driver location data in real time, reducing delivery errors and improving operational visibility across departments.",
        "Built internal analytics and operational dashboards used by logistics and sales teams to monitor fulfillment flow, driver performance, and order lifecycle metrics.",
        "Contributed to payment flow integrations and high-volume transaction handling across B2B and B2C platforms, ensuring reliability in systems directly tied to company revenue.",
        "Developed hybrid web + mobile applications that bridged ecommerce, warehouse operations, and field logistics into a unified operational ecosystem.",
      ],
      tech: [
        "Angular",
        "Ionic",
        "Capacitor",
        "TypeScript",
        ".NET",
        "Node",
        "SQL Server",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Independent",
      range: "July 2016 – Jan 2019",
      bullets: [
        "Delivered complete client websites end-to-end - requirements, implementation, optimization, and launch.",
        "Focused on measurable outcomes like load speed, search visibility, and conversion clarity.",
      ],
      tech: ["WordPress", "SEO", "PHP", "JavaScript"],
    },
    {
      title: "Front End Developer Intern",
      company: "Rapsew",
      range: "Mar 2016 – July 2016",
      bullets: [
        "Learned production development practices inside a collaborative team environment.",
        "Contributed UI features while building foundational debugging and testing discipline.",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="work" className="mx-auto px-4 py-16 section">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
        Work Experience
      </h2>
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
