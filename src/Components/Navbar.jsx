import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import { AlignJustify } from "lucide-react";
import Sidebar from "./Sidebar.jsx";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className="sticky top-0 z-50 flex justify-center bg-white/40 dark:bg-gray-900/30 items-center backdrop-blur-lg   shadow-2xl px-4 py-3 rounded-xl ">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl sm:text-base md:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap font-chirp ">
          <a href="/ " className="text-xl">
            {" "}
            bhushann.ai
          </a>
        </h1>
        <div className="flex items-center gap-5 lg:hidden md:hidden justify-end">
          {" "}
          <ThemeToggle />
          <button
            className="block md:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setOpenSidebar(true)}
          >
            <AlignJustify />
          </button>
        </div>
        <Sidebar
          className="block md:hidden"
          open={openSidebar}
          setOpen={setOpenSidebar}
        />

        {/* Nav Items */}
        <div className="hidden  md:block lg:block font-semibold text-gray-700 dark:text-white whitespace-nowrap font-chirp">
          <div className="flex items-center gap-5 ">
            <a
              className="cursor-pointer  hover:underline  text-2xl transition duration-300 ease-in-out transform hover:scale-105 "
              href="#skills"
            >
              Skills
            </a>
            <a
              className="cursor-pointer hover:underline text-2xl transition duration-300 ease-in-out transform hover:scale-105 "
              href="#project"
            >
              Project
            </a>
            <a
              className="cursor-pointer text-2xl hover:underline transition duration-300 ease-in-out transform hover:scale-105 "
              href="#about"
            >
              About
            </a>{" "}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
