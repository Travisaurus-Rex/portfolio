// src/components/About.tsx
export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 section">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I’m Travis Adams, a full stack software engineer with over six years
            of experience building web and mobile applications. My work spans
            modernizing large-scale systems, designing user-focused interfaces,
            and delivering scalable backend services.
          </p>

          <p>
            I’m a U.S. citizen currently based in Indonesia, and I thrive in
            remote-first environments. Over the years I’ve collaborated with
            distributed teams across time zones, building a reputation for clear
            communication, adaptability, and consistent delivery.
          </p>

          <p>
            What excites me most is the opportunity to work with global teams on
            products that balance technical rigor with a seamless user
            experience. I enjoy tackling complex challenges while keeping a
            strong focus on clarity, performance, and long-term maintainability.
          </p>

          <ul className="list-disc list-inside space-y-2 text-base mt-6">
            <li>U.S. citizen with a permanent U.S. mailing address</li>
            <li>Currently living in Indonesia with experience working across time zones</li>
            <li>Flexible scheduling to overlap with U.S. and international teams</li>
            <li>Reliable remote setup with strong communication skills</li>
          </ul>

          <div className="flex items-center space-x-3 pt-6">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: "var(--color-neon-blue)" }}
            />
            <span style={{ color: "var(--color-neon-blue)" }} className="font-medium">
              Open to new opportunities worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

