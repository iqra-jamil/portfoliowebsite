import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { SiTiktok } from "react-icons/si"
const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "iqraj690@gmail.com",
    href: "mailto:iqraj690@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/iqra-jamil",
    href: "https://www.linkedin.com/in/iqra-jamil-55861b29b/",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/iqra-jamil",
    href: "https://github.com/iqra-jamil",
  },
  {
    icon: SiTiktok,
    label: "tiktok",
    value: "@iqrajamil_",
    href: "tiktok.com/@iqrajamil_",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  // UI only — no backend is wired up. Connect this to a form service
  // (e.g. Formspree, EmailJS, or your own API route) when you're ready.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="relative bg-ink py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
              Have a project in mind, an opportunity to share, or just want to
              say hello? My inbox is open — I try to reply to every message.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-violet/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet transition-colors group-hover:bg-violet/20">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-dim">
                        {link.label}
                      </p>
                      <p className="text-sm text-text">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-border bg-ink-soft px-4 py-3 text-sm text-text placeholder:text-text-dim focus:border-violet focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-xl border border-border bg-ink-soft px-4 py-3 text-sm text-text placeholder:text-text-dim focus:border-violet focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me a little about your project..."
                className="resize-none rounded-xl border border-border bg-ink-soft px-4 py-3 text-sm text-text placeholder:text-text-dim focus:border-violet focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <FiSend />
              {submitted ? "Message ready to send!" : "Send message"}
            </button>
            {/* <p className="text-center text-xs text-text-dim">
              This form is UI only for now — connect it to a form service to
              start receiving messages.
            </p> */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
