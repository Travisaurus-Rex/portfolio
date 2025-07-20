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
                A passionate full stack developer with over 5 years of experience creating 
                digital solutions that bridge the gap between design and functionality. 
                I specialize in modern web technologies and love bringing ideas to life 
                through clean, efficient code.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community. 
                I believe in writing code that not only works but is also maintainable and scalable.
              </p>
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