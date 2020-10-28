import React from "react";
import "./About.css";
import { Fade, Zoom } from "react-reveal";
import { AiOutlineLink } from "react-icons/ai";

export const About = () => {
  const DAM = [
    "Sistemas informáticos.",
    "Bases de Datos.",
    "Programación.",
    "Lenguajes de marcas y sistemas de gestión de información.",
    "Entornos de desarrollo.",
    "Acceso a datos.",
    "Desarrollo de interfaces.",
    "Programación multimedia y dispositivos móviles.",
    "Programación de servicios y procesos.",
    "Sistemas de gestión empresarial.",
    "Proyecto de desarrollo de aplicaciones multiplataforma.",
  ];

  return (
    <div>
      <section className="about" id="about">
        <div className="about-header">
          <Fade left>
            <h2 className="about-header-text">Sobre mi</h2>
          </Fade>
        </div>
        <div className="about-body">
          <Zoom top>
            <img
              className="about-img"
              src={require("../../images/reactJava.png")}
              alt="react-java"
            />
          </Zoom>
          <div className="about-container">
            <p className="about-text">
              Estudié{" "}
              <a href="https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/informatica-comunicaciones/des-aplicaciones-multiplataforma.html">
                DAM (Desarrollo de Aplicaciones Mutliplataforma)
                <AiOutlineLink></AiOutlineLink>
              </a>{" "}
              en 2019-2020. Las cosas que aprendí son:{" "}
            </p>
            <div className="about-ul">
              <ul>
                {DAM.map((asig) => (
                  <li key={asig}>{asig}</li>
                ))}
              </ul>
            </div>
            <p className="about-text">Cursos/titulación hecha por mi cuenta:</p>
            <div className="about-ul">
              <ul>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/fccdc4d8e30-e871-4685-abc2-f9028484026f/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Responsive Web Design <AiOutlineLink></AiOutlineLink>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/fccdc4d8e30-e871-4685-abc2-f9028484026f/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JavaScript Algorithms and Data Structures{" "}
                    <AiOutlineLink></AiOutlineLink>
                  </a>
                </li>
                <li>
                  <a
                    href="https://udemy-certificate.s3.amazonaws.com/image/UC-ae051db6-0ce6-452d-a075-213998bac3fd.jpg?v=1599146732000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Hook MERN <AiOutlineLink></AiOutlineLink>
                  </a>
                </li>
                <li>Spring Boot</li>
              </ul>
            </div>
          </div>

          {/* HTML, CSS, Java, MySQL, Hibernate Las
            cosas que aprendí por mi cuenta: Spring boot, JavaScript, React */}
        </div>
      </section>
    </div>
  );
};
