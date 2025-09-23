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
    <div className="min-h-screen p-3 relative  w-full">
      <Meteors number={30} />
      <Navbar /> <Header />
      <Skills /> <Project /> <AboutMe /> <Contact />
    </div>
  );
}

export default App;
