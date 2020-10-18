import React, { useEffect, useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Start } from "./components/Start/Start";

function App() {
  const local = JSON.parse(localStorage.getItem("dark"));
  const [darkMode, setDarkMode] = useState(local ? local : false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : "aaa"}>
      <Navbar />
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

      <Start />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
