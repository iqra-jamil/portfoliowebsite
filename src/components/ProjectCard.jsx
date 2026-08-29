import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-violet/40"
    >
      {/* Replace this placeholder block with an <img src="/projects/your-image.jpg" alt={project.title} className="h-full w-full object-cover" /> */}
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 border-t border-border pt-5">
          {/* <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-violet"
          >
            <FiGithub /> Code
          </a> */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-amber"
          >
            <FiExternalLink />  demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
