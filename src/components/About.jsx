import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayout } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const highlightCards = [
  {
    icon: FiLayout,
    title: "WordPress Development",
    text: "Creating and customizing responsive WordPress websites based on client requirements.",
  },
  {
    icon: FiCode,
    title: "Frontend Development",
    text: "Building responsive interfaces with HTML, CSS, JavaScript, React, and modern CSS.",

  },
  {
    icon: FiCode,
    title: "Responsive Web Design",
    text: "Designing clean, user-friendly websites that work across desktop, tablet, and mobile devices.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="relative bg-ink py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="A little about my path" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg"
          >
            <p>
              I'm Iqra Jamil, a BSIT graduate and developer focused on WordPress and
              frontend development. I started by building websites and exploring how
              design, layout, and functionality come together to create useful digital
              experiences.
            </p>
            <p>
              I have worked on WordPress client projects and built frontend projects
              using HTML, CSS, JavaScript, and React. I enjoy turning ideas and
              requirements into clean, responsive, and user-friendly websites.
            </p>
            <p>
              My experience includes customizing WordPress websites, working with themes
              and plugins, and developing frontend interfaces. I'm currently building my
              portfolio around WordPress and frontend development and continuing to
              improve my skills through practical projects.
            </p>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="flex flex-col gap-5"
          >
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-violet/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet transition-colors group-hover:bg-violet/20">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-text">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-text-muted">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
