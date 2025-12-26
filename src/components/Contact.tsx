"use client";

import { FormEvent, useState } from "react";
import { Send, LoaderCircle } from "lucide-react";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const url = process.env.NEXT_PUBLIC_RESEND_URL;
    if (!url) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

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
    <section id="contact" className="py-20 scroll-mt-24 section">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-lemon">
            Get In Touch
          </h2>
          <p className="text-text-light/80">
            Have a project idea or opportunity? Let’s build something great
            together.
          </p>
        </div>

        <div className="border border-sunset/30 bg-steel/30 rounded-lg p-8 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {status !== "sent" ? (
              <motion.div
                key="form"
                variants={fadeZoom}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mb-2 text-text-light/90"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg  border border-sunset/30 text-text-light placeholder:text-text-light/50 focus:border-sunset focus:ring-2 focus:ring-sunset/40 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 text-text-light/90"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg  border border-sunset/30 text-text-light placeholder:text-text-light/50 focus:border-sunset focus:ring-2 focus:ring-sunset/40 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-text-light/90"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg  border border-sunset/30 text-text-light placeholder:text-text-light/50 focus:border-sunset focus:ring-2 focus:ring-sunset/40 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-400"
                    >
                      Something went wrong. Please try again later.
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    className="w-full border border-lemon text-lemon px-8 py-3 rounded-lg hover:bg-lemon hover:text-navy transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {status === "loading" ? (
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
                <h2 className="text-3xl text-lemon mb-2 font-semibold">
                  Message Sent!
                </h2>
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
