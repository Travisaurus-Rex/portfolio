'use client';

import { FormEvent, useRef, useState } from 'react';
import { Send, LoaderCircle } from 'lucide-react';
import { send } from '@emailjs/browser';
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
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

  const fadeZoom = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.18, ease: easeOut } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15, ease: easeIn } },
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24 section">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-lemon">Get In Touch</h2>
          <p className="text-text-light/80">
            Have a project idea or opportunity? Let’s build something great together.
          </p>
        </div>

        <div className="border border-sunset/30 bg-steel/30 rounded-lg p-8 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {status !== "sent" ? (
              <motion.div key="form" variants={fadeZoom} initial="initial" animate="animate" exit="exit">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-text-light/90">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg  border border-sunset/30 text-text-light placeholder:text-text-light/50 focus:border-sunset focus:ring-2 focus:ring-sunset/40 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-text-light/90">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg  border border-sunset/30 text-text-light placeholder:text-text-light/50 focus:border-sunset focus:ring-2 focus:ring-sunset/40 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-text-light/90">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg  border border-sunset/30 text-text-light placeholder:text-text-light/50 focus:border-sunset focus:ring-2 focus:ring-sunset/40 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full border border-lemon text-lemon px-8 py-3 rounded-lg hover:bg-lemon hover:text-navy transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
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
                className="flex h-full justify-center flex-col items-center text-center py-12"
              >
                <h2 className="text-3xl text-lemon mb-2 font-semibold">Message Sent!</h2>
                <p className="text-text-light/80 max-w-md">
                  Thanks for reaching out — I’ll get back to you soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
