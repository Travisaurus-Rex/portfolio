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
          I’m Travis Adams, a backend-focused software engineer working with Node.js, TypeScript, NestJS, and Express. With a background in Angular and .NET, I care about building systems that are structured, scalable, and easy to reason about. I enjoy creating APIs and backend services that perform well and stay maintainable as they grow.
        </p>
      </div>
    </section>
  );
}
