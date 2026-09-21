import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";

const ProjectCard = ({ project, index, onOpen }) => (
  <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }} whileHover={{ y: -6 }} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-violet/40">
    {project.category !== "python" && <button type="button" onClick={() => onOpen(project)} className="relative h-48 overflow-hidden text-left sm:h-56" aria-label={`View ${project.title} details`}>
      <img src={project.image} alt={`${project.title} screenshot`} className={`h-full w-full ${project.imageFit === "contain" ? "bg-white object-contain" : "object-cover object-top"} transition duration-500 group-hover:scale-105`} />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-sm font-medium text-white opacity-0 transition group-hover:bg-ink/55 group-hover:opacity-100"><FiImage className="mr-2" /> View details</span>
    </button>}
    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-lg font-semibold text-text sm:text-xl">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-muted">{tag}</span>)}</div>
      <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5">
        {!['frontend', 'python'].includes(project.category) && <button type="button" onClick={() => onOpen(project)} className="inline-flex items-center gap-2 text-sm font-medium text-violet transition-colors hover:text-text"><FiImage /> Details</button>}
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-violet"><FiGithub /> GitHub</a>}
        {project.live && !project.tags.includes("WordPress") && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-amber"><FiExternalLink /> Live link</a>}
        {project.showLiveButton && !project.live && <span aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-2 text-sm font-medium text-text-dim"><FiExternalLink /> Live link</span>}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
