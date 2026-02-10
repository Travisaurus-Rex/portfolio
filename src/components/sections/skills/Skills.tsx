import { Server, Layout, BrainCircuit } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 section">
      <div className="px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Technical Skills
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I build software with the assumption that it will be used, changed,
            and occasionally misunderstood. Most of my decisions come from
            seeing what actually happens after launch, not what looks good in a
            diagram.
          </p>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <p className="flex-1 relative">
              I care about tradeoffs, constraints, and the boring details that
              decide whether a product quietly succeeds or becomes
              someone&apos;s{" "}
              <span className="text-accent font-bold">
                full-time firefighting job
              </span>
              . That perspective comes from working on systems that had to
              survive growth, handovers, and real users with real expectations.
            </p>

            <img
              src="https://media1.tenor.com/m/tU9-0t-rp7gAAAAC/this-is-fine.gif"
              alt="This is fine dog in a burning room"
              className="
                          w-full lg:w-auto
                          pointer-events-none
                          transition-opacity duration-200
                          group-hover:opacity-100
                        "
            />
          </div>

          <p>
            The goal isn&apos;t clever code or perfect abstractions, it&apos;s
            software that earns trust over time and makes the next decision
            easier, not harder.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="rounded-lg md:p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <Layout className="text-neon-pink w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-pink">Frontend</h3>
            </div>
            <p className="leading-relaxed text-base">
              With a strong foundation in JavaScript and TypeScript, I&apos;ve
              built dozens of production apps with
              <span className="text-accent font-bold"> React</span>,
              <span className="text-accent font-bold"> Next.js</span> and
              <span className="text-accent font-bold"> Angular</span>, obsessing
              over component architecture, state management, and performance so
              things don&apos;t mysteriously catch fire in production. User
              experience is non-negotiable. I&apos;ve tried ignoring it before.
              It always comes back angry.
            </p>
          </div>

          <div className="rounded-lg md:p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <p className="leading-relaxed text-base">
              I design and maintain backend services using
              <span className="text-accent font-bold"> Node.js</span> and
              <span className="text-accent font-bold"> NestJS</span> when I want
              structure, opinions, and fewer bad decisions, and Express when I
              just need an API running yesterday. Since early 2025, I&apos;ve
              been building apps that need concurrency and worker pools using{" "}
              <span className="text-accent font-bold">Go</span> /{" "}
              <span className="text-accent font-bold"> GoLang</span>.
            </p>
          </div>

          <div className="rounded-lg md:p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <BrainCircuit className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Mindset</h3>
            </div>
            <p className="leading-relaxed text-base">
              I write clear, testable code and aim to leave systems better than
              I found them. I care about developer experience, documentation,
              and automation, and I think performance and reliability deserve
              more attention than a late-night incident report.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="md:p-8 rounded-lg">
            <h3 className="text-2xl mb-4">Always Learning</h3>
            <p className="text-foreground/80 leading-relaxed text-base">
              I stay committed to continuous learning, largely because standing
              still is how you wake up outdated. I learn by shipping, breaking
              things (responsibly), and figuring out why something worked (or
              didn&apos;t) after it&apos;s in the real world.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "GoLang",
                "Vue.js",
                "Bun",
                "Real-time systems",
                "Kubernetes",
              ].map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
