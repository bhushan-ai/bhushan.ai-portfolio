import React from "react";

function AboutMe() {
  return (
    <>
      <h1 className="text-2xl text-center md:text-3xl font-bold text-gray-800 dark:text-gray-300  font-chirp">
        About Me
      </h1>
      <section
        id="about"
        className="flex items-center justify-center font-chirp"
      >
        <div
          className="w-fit h-fit rounded-lg p-8 mt-5 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111]
text-white dark:text-gray-500"
        >
          <h2 className="text-2xl text-center mt-3 md:text-3xl font-bold text-gray-200 dark:text-white ">
            Hello, I'm Bhushan
          </h2>
          <p className="text-lg md:text-2xl font-semibold text-gray-200 dark:text-gray-300 text-center mt-5">
            I'm currently in my third year of studying software development, and
            while I don't have professional experience yet, I’m eager to learn
            and grow in this field. I'm actively seeking an internship where I
            can apply my knowledge of MERN stack and modern web technologies...
          </p>
          <p className="text-lg md:text-2xl font-semibold text-gray-200 dark:text-gray-300 text-center mt-5">
            My goal is to create beautiful, efficient, and user-friendly
            websites that solve real-world problems. I'm constantly learning and
            staying up-to-date with the latest trends in web development.
          </p>
          <p className="text-lg md:text-2xl font-semibold text-gray-200 dark:text-gray-300 text-center mt-5 ">
            When I'm not coding, you can find me traveling, reading books, or
            experimenting with new recipes in the kitchen.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
