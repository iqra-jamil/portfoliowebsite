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
      </div>
    </section>
  );
};

export default Projects;
