import React from "react";
import { ShimmerButton } from "./magicui/shimmer-button";

function Header() {
  return (
    <div id="/" className="p-2  m-15 ">
      <h1 className="text-3xl md:text-5xl text-center font-bold  text-gray-800 dark:text-gray-300 ">
        Hi I'm Bhushan
      </h1>

      <p className="text-lg md:text-2xl font-semibold text-gray-500 dark:text-gray-300 text-center mt-5">
        MERN & GenAi Developer | Building Al Agents & RAG-powered Applications
      </p>
      <div className="items-center flex justify-center mt-6">
        <ShimmerButton>
          <a href="#contact" className="text-white text-xl font-bold">
            {" "}
            Hire Me
          </a>{" "}
        </ShimmerButton>
      </div>
    </div>
  );
}

export default Header;
