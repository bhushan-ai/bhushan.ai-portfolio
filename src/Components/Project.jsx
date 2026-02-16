import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Card from "./Card";
import assets from "../assets/allimg.js";

function Project() {
  const scrollRef = useRef();
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  const projects = [
    {
      title: "Exenalytics",
      img: assets.exelanalytics,

      description:
        "Excel Analytics Platform is a web application that aims to let users upload Excel sheets, analyze them with AI, generate summaries and charts, and manage accounts & settings.",
      website: "https://exenalytics.vercel.app/",
    },
    {
      title: "Notebook LM lite",
      img: assets.ragss,
      description:
        "NotebookLite is a lightweight Retrieval-Augmented Generation (RAG) application built with Next.js. It allows users to interact with their data through a chat interface, supporting text, PDF, and URL inputs",
      website: "https://nextjs-rag-application-note-book-li.vercel.app/",
    },
    {
      title: "YT Thumbnail Generator",
      img: assets.thumbnaiss,
      description:
        "A modern AI-powered YouTube Thumbnail Generator built with Next.js, OpenAI, and Fal.ai, styled with TailwindCSS. Upload an image, enter a prompt, and let the AI generate stunning thumbnails for your videos.",
      website: "https://github.com/bhushan-ai/thumbnail-generator-GenAi-Nextjs",
    },

    {
      title: "Browser Agent via OpenAI Agent SDK",
      img: assets.browser,

      description:
        "A browser automation agent built using the OpenAI Agents SDK, Puppeteer, and Google Gemini, enabling autonomous web interactions such as navigation, form filling, and screenshot capture.",
      website: "https://github.com/bhushan-ai/Blogify-Backend ",
    },

    {
      title: "Voting App (Backend) ",
      img: assets.voting,
      description:
        "Backend app I have created using node express and MongoDb This have functionality like login signUp you can vote here and create candidate, candidate created by only Admin and there can be one admin and admin can't vote you can checkout the repo by using following link",
      website: "https://github.com/bhushan-ai/voting-app-backend",
    },
  ];

  return (
    <div
      id="project"
      className="w-full h-fit rounded-lg mt-4 p-0.5  m-0.5
text-white dark:text-gray-500 font-chirp "
    >
      <h2 className="text-3xl font-bold mb-3 text-center mt-4  text-gray-800 dark:text-gray-300  ">
        Projects
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black transition hidden lg:block"
        >
          {" "}
          <ArrowLeft size={20} />
        </button>{" "}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth space-x-4  no-scrollbar "
        >
          {projects.map((project, index) => {
            return (
              <Card
                key={index}
                title={project.title}
                img={project.img}
                desc={project.description}
                visit={project.website}
              />
            );
          })}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black transition  hidden lg:block"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Project;
