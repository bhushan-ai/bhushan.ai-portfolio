import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center">
      <div
        className="w-full h-fit  p-5  mt-5 bg-white dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900
text-white dark:text-gray-500 shadow-2xl "
      >
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-700 dark:text-white  ">
          Connect me Via{" "}
        </h2>
        <div className="flex justify-center space-x-4 mb-5">
          <a
            href="https://github.com/bhushan-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bhushan-ingole/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="mailto:bhushaningole2004@gmail.com?subject=Contact from Portfolio"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <footer className=" text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} bhushann.ai — All Rights Reserved.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
