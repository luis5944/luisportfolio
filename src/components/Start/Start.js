import React from "react";
import { Link } from "react-scroll";
import "./Start.css";
export const Start = ({ setDarkMode, darkMode }) => {
  return (
    <div id="start">
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem("dark", !darkMode);
            }}
            defaultChecked={darkMode}
          />
          <div className="slider round"></div>
        </label>
        <em>{darkMode ? "Activa el modo claro" : "Activa el modo oscuro"}</em>
      </div>
      <main className="start">
        <h1 className="start-head">
          Hola, mi nombre es <span className="start-name">Luis F.N</span>
        </h1>
        <h1 className="start-body">Soy desarrollador.</h1>
        <Link to="about" smooth duration={200}>
          <button className="start-btn"> Sobre mi</button>
        </Link>
      </main>
    </div>
  );
};
