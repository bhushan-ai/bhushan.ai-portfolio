import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import { Meteors } from "./Components/magicui/meteors.jsx";

function App() {
  return (
    <div className="  text-white  min-h-screen p-3 ">
      <Meteors number={30} />
      <div className="  mt-0 mb-0">
        <Navbar /> <Header />
        <Skills /> <Project /> <AboutMe /> <Contact />
      </div>
    </div>
  );
}

export default App;
