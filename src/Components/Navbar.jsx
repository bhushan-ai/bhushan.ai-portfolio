import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import { AlignJustify } from "lucide-react";
import Sidebar from "./Sidebar.jsx";
//white dark:bg-gradient-to-tl from-gray-900 via-gray-800 to-teal-900
function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center backdrop-blur-lg  shadow-2xl px-4 py-3">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between overflow-hidden">
        <h1 className="text-2xl sm:text-base md:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          <a href="/ " className="text-xl">
            {" "}
            bhushann.ai
          </a>
        </h1>
        <div className="block lg:hidden md:hidden justify-end ml-20  ">
          {" "}
          <ThemeToggle />
        </div>

        <button
          className="block md:hidden"
          onClick={() => setOpenSidebar(true)}
        >
          <AlignJustify />
        </button>
        <Sidebar
          className="block md:hidden"
          open={openSidebar}
          setOpen={setOpenSidebar}
        />

        {/* Nav Items */}
        <div className="hidden md:block lg:block font-semibold text-gray-700 dark:text-white whitespace-nowrap">
          <div className="flex items-center gap-5">
            <a
              className="cursor-pointer  hover:text-teal-400  text-2xl transition duration-300 ease-in-out transform hover:scale-105 "
              href="#skills"
            >
              Skills
            </a>
            <a
              className="cursor-pointer hover:text-teal-400 text-2xl transition duration-300 ease-in-out transform hover:scale-105 "
              href="#project"
            >
              Project
            </a>
            <a
              className="cursor-pointer text-2xl hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 "
              href="#about"
            >
              About
            </a>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
