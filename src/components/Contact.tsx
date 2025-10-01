'use client';

import { FormEvent, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, LoaderCircle } from 'lucide-react';
import { send } from '@emailjs/browser';
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formRef);
    if (!formRef.current) return;
    setStatus('loading');

    const data = Object.fromEntries(new FormData(formRef.current)) as Record<string, string>;

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

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

  const fadeZoom = {
    initial: { opacity: 0, scale: 0.98 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.18, ease: easeOut },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.15, ease: easeIn },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-neon-cyan neon-glow">Get</span> <span className="text-neon-pink">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
          <p className="text-foreground/80 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="neon-border border-neon-cyan/30 p-8 rounded-lg bg-card/20 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {status !== "sent" ? (
                <motion.div
                  key="form"
                  variants={fadeZoom}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <h3 className="text-2xl mb-6 text-neon-cyan neon-glow">Send a Message</h3>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
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
                            required
                            className="w-full px-4 py-3 rounded-lg bg-input border border-neon-cyan/30 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm mb-2 text-foreground">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-input border border-neon-cyan/30 text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full neon-border border-neon-pink text-neon-pink px-8 py-3 rounded-lg hover:bg-neon-pink/10 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        { status == 'idle' &&
                          <Send size={18} />
                        }
                        { status == 'loading' &&
                          <LoaderCircle size={18} className="animate-spin" />
                        }
                        <span>Send Message</span>
                      </button>
                    </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  variants={fadeZoom}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex h-full justify-center flex-col items-center"
                >
                  <h2 className="text-4xl text-neon-cyan neon-glow">Email Sent</h2>
                  <h3 className="text-2xl">Thank you for your message!</h3>
                </motion.div>
              )}
            </AnimatePresence>

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
                Let&apos;s connect on social media and stay updated with the latest in tech and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}