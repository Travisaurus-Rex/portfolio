// src/components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-6xl! flex flex-col justify-center section"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-8xl text-accent font-extrabold leading-[1.1] mb-12 text-balance">
          I build software<br />
          that feels fast,<br />
          focused, and human.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-foreground/80">
          I’m Travis Adams... a software engineer focused on building systems that
          balance performance and clarity. My background is in Angular and .NET,
          and lately I’ve been diving deep into backend development with Node.js
          and Go -- creating tools and APIs that are fast, maintainable, and
          genuinely enjoyable to use.
        </p>
      </div>
    </section>
  );
}
