import React, { useState } from "react";

import { Project } from "../Project/Project";
import "./Projects.css";
import { ProjectsData } from "./ProjectsData";

export const Projects = () => {
  const projects = ProjectsData;
  const [selectValue, setSelectValue] = useState("React");
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div id="projects">
      <section className="projects">
        <div className="projects-header">PROYECTOS</div>
        <div className="custom-select">
          <select onChange={handleChange}>
            <option value="React" key="react">
              React
            </option>
            <option value="Java" key="java">
              Java
            </option>
          </select>
        </div>

        <hr />
        {projects.map((project) =>
          project.type === selectValue ? (
            <Project key={project.name} project={project} />
          ) : null
        )}
      </section>
    </div>
  );
};
