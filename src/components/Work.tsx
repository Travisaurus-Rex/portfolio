// src/components/Work.tsx
export default function Work() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "CXtec",
      link: "https://www.cxtec.com/",
      range: "Mar 2024 – Apr 2025",
      bullets: [
        "Built Angular and React interfaces supported by modular .NET APIs.",
        "Led modernization efforts like the OrderFlow Rebuild project.",
        "Collaborated with distributed teams to deliver enterprise-grade solutions.",
      ],
      tech: ["Angular", "React", ".NET", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Meyer Distributing",
      link: "https://www.meyerdistributing.com/",
      range: "Jan 2019 – Mar 2024",
      bullets: [
        "Owned full-stack development across web and mobile apps.",
        "Created reusable components and mentored junior developers.",
        "Improved onboarding and team efficiency with better documentation.",
      ],
      tech: ["Angular", "React Native", "TypeScript", "Ionic", ".NET"],
    },
    {
      title: "Full Stack Developer",
      company: "Independent",
      range: "July 2016 – Jan 2019",
      bullets: [
        "Built client websites using WordPress and custom themes.",
        "Optimized SEO and site performance for small businesses.",
      ],
      tech: ["WordPress", "SEO", "JavaScript"],
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
