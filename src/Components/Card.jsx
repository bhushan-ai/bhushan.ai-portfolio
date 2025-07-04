import React from "react";
//min-w-[300px] max-w-sm
function Card(props) {
  return (
    <div className="min-w-[100px] max-w-sm h-fit flex-shrink-0 px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg  text-gray-700 dark:text-white">
      <img className="h-fit object-cover" src={props.img} alt="Card Image" />

      <div className="p-4">
        <h2 class="text-xl font-semibold  mb-4">{props.title}</h2>
        <p class="text-lg font-semibold mb-4">{props.desc} </p>
        <a
          className="underline text-blue-400 text-lg "
          href={props.visit}
          target="_blank"
        >
          Visit{" "}
        </a>
      </div>
    </div>
  );
}

export default Card;
