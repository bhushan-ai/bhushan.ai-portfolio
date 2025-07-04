import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className=" animated-gradient text-white  min-h-screen p-3 ">
      <div className="  mt-0 mb-0">
        <Navbar /> <Header />
        <Skills /> <Project /> <AboutMe /> <Contact />
      </div>
    </div>
  );
}

export default App;
