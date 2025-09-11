import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center font-chirp"
    >
      <div
        className="w-full h-fit  p-5  mt-5 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111]
text-white dark:text-gray-500 "
      >
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-200 dark:text-gray-300 ">
          Connect me Via{" "}
        </h2>
        <div className="flex justify-center space-x-4 mb-5">
          <a
            href="https://x.com/bhushann_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="white"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
            <span className="sr-only">X</span>
          </a>
          <a
            href="https://github.com/bhushan-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bhushan-ingole/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="mailto:bhushaningole2004@gmail.com?subject=Contact from Portfolio"
            className="text-gray-200 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <footer className=" text-sm text-gray-200 dark:text-gray-400">
          © {new Date().getFullYear()} bhushann.ai — All Rights Reserved.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
