import { Code, Server, Database, Cloud } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications using Node.js, Python, and various frameworks.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing and optimizing database schemas for SQL and NoSQL databases including PostgreSQL and MongoDB.'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Deploying and scaling applications on AWS, Azure, and Google Cloud Platform with DevOps practices.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-neon-cyan neon-glow">About</span> <span className="text-neon-pink">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="neon-border border-neon-cyan/30 p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl mb-4 text-neon-green">Hello, I&apos;m Travis Adams</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A full stack software engineer with a passion for building practical, user-focused digital solutions. Over the past several years, I&apos;ve honed my skills crafting scalable web and mobile apps using technologies like Angular, React, .NET, and Node.js, always aiming to bridge the gap between solid architecture and seamless user experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                I currently live abroad in Indonesia while working remotely with American teams. This experience has strengthened my skills in clear communication, collaboration, and adapting to different time zones — all essential for delivering projects reliably and on schedule, no matter where I&apos;m based.
              </p>
              <h3 className="mt-4 mb-2">Key Remote Worker Details:</h3>
              <ul className="list-disc list-inside pl-2 space-y-2 text-foreground/80 leading-relaxed mb-4">
                <li>U.S. citizen with a permanent U.S. mailing address</li>
                <li>Experienced working fully remote with U.S.-based companies</li>
                <li>Available during core U.S. business hours to ensure seamless collaboration</li>
                <li>Equipped with a reliable remote work setup and strong communication skills</li>
              </ul>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse-glow"></div>
                <span className="text-neon-green">Available for new opportunities</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="neon-border border-neon-purple/30 p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:border-neon-purple transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-neon-purple mb-4 group-hover:text-neon-cyan transition-colors" />
                <h4 className="mb-2 text-neon-cyan">{feature.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}