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
    <>
      <Navbar />
      <div className={darkMode ? "dark-mode" : ""}>
        <Start darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
