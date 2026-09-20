import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-ink py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/python-projects"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400 hover:-translate-y-0.5"
          >
            <span>🐍</span> Python Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;