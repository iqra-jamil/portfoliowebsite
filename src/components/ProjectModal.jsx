import { useEffect } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  const screenshots = project.screenshots?.map((fileName) => `/webistes screen shots/${fileName}`) ?? [project.image];
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [onClose]);
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={onClose}>
    <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
      <div className="flex items-start justify-between gap-6 p-5 pb-3 sm:p-7 sm:pb-4"><div><p className="eyebrow">Project details</p><h2 id="project-modal-title" className="mt-2 font-display text-2xl font-semibold text-text">{project.title}</h2></div><button type="button" onClick={onClose} className="rounded-lg p-2 text-text-muted transition hover:bg-surface-2 hover:text-text" aria-label="Close project details"><FiX size={22} /></button></div>
      <div className="px-5 pb-5 sm:px-7 sm:pb-7"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{screenshots.map((screenshot, index) => <img key={screenshot} src={screenshot} alt={`${project.title} screenshot ${index + 1}`} className="max-h-[440px] w-full rounded-xl border border-border bg-ink object-contain" loading={index === 0 ? "eager" : "lazy"} />)}</div><p className="mt-5 leading-relaxed text-text-muted">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-muted">{tag}</span>)}</div><div className="mt-6 flex flex-wrap gap-3">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-violet/50 px-4 py-2 text-sm font-medium text-text transition hover:bg-violet/10"><FiGithub /> GitHub repo</a>}{project.live && !project.tags.includes("WordPress") && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-violet px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-dim"><FiExternalLink /> Live link</a>}{project.showLiveButton && !project.live && <span aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-surface-2 px-4 py-2 text-sm font-semibold text-text-dim"><FiExternalLink /> Live link</span>}</div></div>
    </div>
  </div>;
}
