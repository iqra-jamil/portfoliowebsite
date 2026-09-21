import { useEffect, useState } from "react";
import { projectGroups } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <><Navbar /><main className="min-h-screen bg-ink pb-8 pt-28 text-text sm:pb-12 sm:pt-32"><div className="container-px mx-auto max-w-6xl"><header className="max-w-2xl py-16 sm:py-20"><p className="eyebrow">Selected work</p><h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">All <span className="text-gradient">Projects</span></h1><p className="mt-5 leading-relaxed text-text-muted">A collection of client websites, frontend interfaces, and Python & AI projects.</p></header>{projectGroups.map((group) => <section key={group.id} className="border-t border-border py-14 first:border-t-0 first:pt-0"><p className="eyebrow">{group.id.replace("-", " ")}</p><h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{group.title}</h2><p className="mt-3 max-w-2xl text-text-muted">{group.description}</p><div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">{group.projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />)}</div></section>)}</div>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</main><Footer /></>;
}
