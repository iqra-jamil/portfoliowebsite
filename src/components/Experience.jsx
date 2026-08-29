import { motion } from "framer-motion";
import { timeline } from "../data/experience";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="relative bg-ink-soft py-24 md:py-32">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Journey" title="Experience &amp; education" />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-6" />

          <div className="flex flex-col gap-10">
            {timeline.map((entry, i) => {
              const Icon = entry.icon;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="relative flex gap-5 pl-1 sm:gap-6"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet/40 bg-surface text-violet sm:h-12 sm:w-12">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-violet/40">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber">
                      {entry.year}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-text sm:text-xl">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">{entry.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
