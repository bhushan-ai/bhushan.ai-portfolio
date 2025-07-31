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
      title: "Weather App",
      img: assets.weather,
      description:
        "I created this app using react js and here i  use rest Api and Context Api concept i style my app using Tailwind ",
      website: "https://weather-forcast-reactapp.netlify.app/",
    },
    {
      title: "Calculator",
      img: assets.calc,

      description: "This is simple calculator I have created using js ",
      website: "https://calculateop.netlify.app/",
    },
    {
      title: "Shoe Collection",
      img: assets.shoe,

      description:
        "This was my first Project React js, I have created this site for maintain my shoe collection",
      website: "https://bhushan-ai-shoe-collection.netlify.app/",
    },
    {
      title: "Todo App",
      img: assets.todo,

      description:
        "This was Created by me for my friend he wants me to create something that will handel his daily routine",
      website: "https://todoo-js.netlify.app/",
    },

    {
      title: "Meme Generator",
      img: assets.meme,

      description:
        "Created this app using React and tailwind i have used react router for routing and and use framer-motion for draggable text and for saving the edited meme i have used dom-to-image-more and downloadjs.",
      website: "https://meme-generator-reactt.netlify.app/",
    },

    {
      title: "Voting App",
      img: assets.voting,
      description:
        "Backend app I have created using node express and MongoDb This have functionality like login signUp you can vote here and create candidate, candidate created by only Admin and there can be one admin and admin can't vote you can checkout the repo by using following link",
      website: "https://github.com/bhushan-ai/voting-app-backend",
    },
    {
      title: "Blogging App",
      img: assets.blog,

      description:
        "This is Fullstack app I have created using ejs node express and MongoDb This have functionality like login signUp you can create blog here you can add image in your blog also you can comment on any particular blog and I have performed all operations using Postman you can checkout the repo by using following link because I haven’t deployed it yet",
      website: "https://github.com/bhushan-ai/Blogify-Backend",
    },
  ];
  //  bg-white dark:bg-gradient-to-tl from-gray-900 via-gray-800 to-teal-900 shadow-2xl

  return (
    <div
      id="project"
      className="w-full h-fit rounded-lg mt-4 p-0.5  m-0.5
text-white dark:text-gray-500 "
    >
      <h2 className="text-3xl font-bold mb-3 text-center mt-4 text-gray-700 dark:text-white  ">
        Projects
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Project;
