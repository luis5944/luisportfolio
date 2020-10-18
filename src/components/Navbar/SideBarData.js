import React from "react";
import * as AiIcons from "react-icons/ai";
import { SiAboutDotMe } from "react-icons/si";

export const SideBarData = [
  {
    title: "Inicio",
    path: "start",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Sobre mi",
    path: "about",
    icon: <SiAboutDotMe />,
    cName: "nav-text",
  },

  {
    title: "Proyectos",
    path: "projects",
    icon: <AiIcons.AiFillCode />,
    cName: "nav-text",
  },
  {
    title: "Contacto",
    path: "contact",
    icon: <AiIcons.AiFillAliwangwang />,
    cName: "nav-text",
  },
];
