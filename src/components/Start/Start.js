import React from "react";
import { Link } from "react-scroll";
import "./Start.css";
export const Start = () => {
  return (
    <div>
      <main className="start" id="start">
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
