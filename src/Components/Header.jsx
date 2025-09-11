import React from "react";
import { ShimmerButton } from "./magicui/shimmer-button";
import { WordRotate } from "./magicui/word-rotate";

function Header() {
  return (
    <div id="/" className="p-2  m-15 ">
      <WordRotate
        duration={3000}
        className="text-3xl md:text-5xl text-center font-bold  text-gray-800 dark:text-gray-300 "
        words={["I'm bhushann", "MERN Dev", "GenAI Dev ", "Backend Dev "]}
      />
      <div className="flex items-center justify-center">
        {" "}
        <p className="text-lg md:text-2xl font-semibold text-gray-500 dark:text-gray-300 text-center mt-5 font-chirp">
          I Build Backends | AI Agents & RAG-powered Applications
        </p>
      </div>
      <div className="items-center flex justify-center mt-6">
        <ShimmerButton
          className="p-0 m-0"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-white text-xl font-bold">Hire Me</span>
        </ShimmerButton>
      </div>
    </div>
  );
}

export default Header;
