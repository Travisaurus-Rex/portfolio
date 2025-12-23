// src/components/About.tsx
export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="mb-4 text-sm uppercase tracking-widest text-accent">
          About
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
          I build software that feels
          <span className="text-accent"> fast</span>,
          <span className="text-accent"> focused</span>, and{" "}
          <span className="text-accent">human</span>.
        </h1>

        <div className="mt-6 h-px w-24 bg-white" />

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
          I&apos;m a full stack software engineer experienced in building and
          maintaining production web applications across frontend and backend. I
          work comfortably across UI, APIs, databases, and integrations, with a
          focus on clarity, performance, and long-term maintainability.
        </p>
      </div>
    </section>
  );
}
