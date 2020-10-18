import React from "react";
import "./Contact.css";
import { Flip } from "react-reveal";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-body">
        <h1>Contacto</h1>
        <h3>¿Quieres saber algo más?</h3>
        <Flip top>
          <a href="mailto:luis5944@gmail.com" className="contact-btn">
          Ponte en contacto...
          </a>
        </Flip>
      </div>
    </section>
  );
};
