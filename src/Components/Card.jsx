import React from "react";
//min-w-[300px] max-w-sm
function Card(props) {
  return (
    <div className="sm:w-full w-[240px] max-w-sm h-fit flex-shrink-0 px-4 py-3 m-2 mt-3 rounded-2xl dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111]   transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-gray-700 ">
      <img className=" object-cover" src={props.img} alt="Card Image" />

      <div className="p-2">
        <h2 className="text-xl font-semibold text-white mb-2">{props.title}</h2>
        <p className="text-lg font-medium mb-2 text-gray-400">{props.desc} </p>
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
