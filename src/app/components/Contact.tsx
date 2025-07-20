'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tadamsdeveloper@gmail.com',
      href: 'mailto:tadamsdeveloper@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (314) 643-6932',
      href: 'tel:+3146436932'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dallax, TX / Malang, Indonesia',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Travisaurus-Rex',
      color: 'neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/travis-a-768637a2/',
      color: 'neon-pink'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-neon-cyan neon-glow">Get</span> <span className="text-neon-pink">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
          <p className="text-foreground/80 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neon-border border-neon-cyan/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm">
            <h3 className="text-2xl mb-6 text-neon-cyan neon-glow">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-neon-cyan/30 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-neon-cyan/30 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-neon-cyan/30 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-neon-cyan/30 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full neon-border border-neon-pink text-neon-pink px-8 py-3 rounded-lg hover:bg-neon-pink/10 transition-all duration-300 flex items-center justify-center space-x-2 neon-glow"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="neon-border border-neon-purple/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm">
              <h3 className="text-2xl mb-6 text-neon-purple neon-glow">Contact Info</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 group hover:text-neon-cyan transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <info.icon className="w-6 h-6 text-neon-purple group-hover:text-neon-cyan transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="neon-border border-neon-green/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm">
              <h3 className="text-2xl mb-6 text-neon-green neon-glow">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a target="_blank"
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-lg border border-current flex items-center justify-center hover:bg-current/10 transition-all duration-300 text-${social.color}`}
                    style={{ color: `var(--color-${social.color})` }}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              
              <p className="text-foreground/70 mt-6 leading-relaxed">
                Let's connect on social media and stay updated with the latest in tech and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}