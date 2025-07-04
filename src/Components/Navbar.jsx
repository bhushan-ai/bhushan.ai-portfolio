import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gradient-to-tl from-gray-900 via-gray-800 to-teal-900 shadow-xl px-4 py-3">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between overflow-hidden">
        <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          <a href="/"> bhushann.ai</a>
        </h1>

        {/* Nav Items */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base font-semibold text-gray-700 dark:text-white whitespace-nowrap">
          <a
            className="cursor-pointer md:text-lg hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 "
            href="#skills"
          >
            Skills
          </a>
          <a
            className="cursor-pointer md:text-lg hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 "
            href="#project"
          >
            Project
          </a>
          <a
            className="cursor-pointer md:text-lg hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 "
            href="#about"
          >
            About
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <nav className="w-full px-4 py-3 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center">
//       <h1 className="text-xl font-bold dark:text-white">bhushann.ai</h1>
//       <div className="flex gap-4 items-center">
//         <a href="#skills" className="hover:text-teal-500 dark:text-white">
//           Skills
//         </a>
//         <a href="#projects" className="hover:text-teal-500 dark:text-white">
//           Projects
//         </a>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;
