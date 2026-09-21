import { useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return <section id="projects" className="relative bg-ink py-24 md:py-32"><div className="container-px mx-auto max-w-6xl"><SectionHeading eyebrow="Projects" title="Things I've built" /><div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} onOpen={setSelectedProject} key={project.id} />)}</div><div className="mt-12 flex justify-center"><Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-violet px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-dim">View All Projects</Link></div></div>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</section>;
};

export default Projects;
