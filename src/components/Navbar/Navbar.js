import React, { useState } from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./Navbar.css";

export const Navbar = () => {
  const [sidebar, setSiderbar] = useState(false);

  const showSideBar = () => {
    setSiderbar(!sidebar);
  };
  document.body.onclick = function () {
    setSiderbar(false);
  };
  return (
    <>
      <div className="navbar">
        <Link to="#">
          <FaIcons.FaBars onClick={showSideBar} className="bar" />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose className="menu-close" />
            </Link>
          </li>

          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
