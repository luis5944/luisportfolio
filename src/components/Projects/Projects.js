import React from "react";

import { Project } from "../Project/Project";
import "./Projects.css";
import { ProjectsData } from "./ProjectsData";

export const Projects = () => {
  const projects = ProjectsData;

  return (
    <div id="projects">
      <section className="projects">
        <div className="projects-header">PROYECTOS</div>
        <hr />
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
    </div>
  );
};
