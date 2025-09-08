import React, { Fragment } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function Sidebar({ open, setOpen }) {
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="h-fit w-64  bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111]  ">
          <SheetHeader>
            <SheetTitle className="mt-5">
              {" "}
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="cursor-pointer text-gray-200   hover:underline  text-xl transition duration-300 ease-in-out transform hover:scale-105 "
                href="#skills"
              >
                Skills
              </a>
            </SheetTitle>
            <SheetTitle>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="cursor-pointer text-gray-200  hover:underline  text-xl transition duration-300 ease-in-out transform hover:scale-105 "
                href="#project"
              >
                Project
              </a>
            </SheetTitle>
            <SheetTitle>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="cursor-pointer text-gray-200  hover:underline text-xl transition duration-300 ease-in-out transform hover:scale-105 "
                href="#about"
              >
                About Me
              </a>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Sidebar;
