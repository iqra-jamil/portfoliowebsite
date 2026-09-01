import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import NodeField from "./NodeField";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28 pb-20 md:pt-32"
    >
      {/* Signature background: animated neural node-link field */}
      <div className="pointer-events-none absolute inset-0">
        <NodeField />
        <div className="grain absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] translate-x-1/4 rounded-full bg-amber/10 blur-[130px]" />
      </div>

      <div className="container-px relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <motion.p variants={item} className="eyebrow mb-5">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            Iqra Jamil
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm text-violet sm:text-base"

          >

            WordPress Developer  /  Frontend Developer
          </motion.p>


          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"

          >

            I build responsive, user-friendly websites with WordPress and React. I focus
            on clean layouts, practical functionality, and interfaces that work well
            across different devices. I enjoy turning ideas and client requirements
            into polished web experiences.
          </motion.p>


          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="/cv resume.pdf"
              download
              className="group inline-flex items-center text-ink! gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              <FiDownload className="transition-transform group-hover:-translate-y-0.5 text-ink!" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-all hover:border-violet hover:bg-violet/10"
            >
              <FiMail />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 mx-auto flex md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/40 to-amber/20 blur-2xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-black/50 sm:h-72 sm:w-72">
              {/* Replace this placeholder with: <img src="/your-photo.jpg" alt="Iqra Jamil" className="h-full w-full object-cover" /> */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-surface-2">
                <span className="font-display text-6xl text-text-dim sm:text-7xl">
                  <img src='/thumbnails/iqra.jpeg' />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-dim md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
        <FiArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;
