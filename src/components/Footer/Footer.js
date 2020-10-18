import "./Footer.css";
import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Link to="start" smooth duration={500}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </Link>
        <div className="footer-icons">
          <a
            href="https://github.com/luis5944"
            className="footer-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <p className="footer-text">© 2020 - Template by Luis Fraga</p>
      </footer>
    </div>
  );
};
