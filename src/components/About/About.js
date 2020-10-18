import React from "react";
import "./About.css";
import { Fade, Zoom } from "react-reveal";

export const About = () => {
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
              Estudié DAM (Desarrollo de Aplicaciones Mutliplataforma)
              2019-2020. Las cosas que aprendí son:{" "}
            </p>
            <div className="about-ul">
              <ul>
                <li>Java</li>
                <li>MySQL</li>
                <li>Hibernate</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <p className="about-text">
              También aprendí por mi cuenta cosas como:
            </p>
            <div className="about-ul">
              <ul>
                <li>JavaScript</li>
                <li>React</li>
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
