import React from "react";

function Header() {
  return (
    <div id="/" className="p-2  m-15 text-white dark:text-gray-500">
      <h1 className="text-3xl md:text-5xl text-center font-bold  text-white">
        Hi I'm Bhushan
      </h1>

      <p className="text-lg md:text-2xl font-semibold text-gray-300 text-center mt-5">
        Passionate Fullstack Developer | Transforming Ideas Into Seamless and
        Visually Stunning Web solutions
      </p>
      <div className="items-center flex justify-center mt-6">
        <button className="text-xl font-semibold text-gray-800 bg-gradient-to-br from-white to-blue-300 px-6 py-2 rounded-full shadow-md hover:to-blue-400  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <a href="#contact"> Hire Me</a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
