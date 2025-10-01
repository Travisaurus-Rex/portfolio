// src/components/Work.tsx
export default function Work() {
  const jobs = [
    {
      title: "Software Engineer II",
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
      title: "Front End Developer",
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
      title: "Freelance Developer",
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
    <section id="work" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-12">Work Experience</h2>
      <div className="space-y-12">
        {jobs.map((job, idx) => (
          <div key={idx} className="grid grid-cols-6 gap-6">
            {/* Date */}
            <div className="col-span-2 text-sm text-gray-400 font-mono uppercase tracking-wide">
              {job.range}
            </div>

            {/* Job Content */}
            <div className="col-span-4 space-y-4">
              <h3 className="font-semibold text-lg">
                {job.title} ·{" "}
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>

              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
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
