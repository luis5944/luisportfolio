import React from "react";
import "./Project.css";

export const Project = ({ project }) => {
  return (
    <>
      <div className="project">
        <div className="project-body">
          <h3>{project.name}</h3>
          <p>{project.info}</p>
          <ul className="project-ul">
            {project.technologies.map((tec) => {
              return <li>{tec}</li>;
            })}
          </ul>

          {project.urlDemo === "" ? null : (
            <a
              href={project.urlDemo}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Demo
            </a>
          )}
          {project.urlCode === "" ? null : (
            <a
              href={project.urlCode}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código
            </a>
          )}
        </div>
        <div className="project-img">
          <img
            src={require(`../../images/${project.img}`)}
            alt={project.name}
          />
        </div>
      </div>
      <hr />
    </>
  );
};
