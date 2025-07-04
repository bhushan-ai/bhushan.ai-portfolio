const frontEndSkills = [
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind" },
  { name: "React.js" },
];

const backendSkills = [
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Node.js" },
  { name: "Mongoose" },
  { name: "Postman" },
];

const programmingLang = [{ name: "C" }, { name: "C++" }, { name: "Java" }];

const otherSkills = [{ name: "Git" }, { name: "GitHub" }, { name: "Netlify" }];

export default function Skills() {
  return (
    <div id="skills" className="flex items-center justify-center mt-4 p-0">
      <section className="bg-white dark:bg-gradient-to-tl from-gray-900 via-gray-800 to-teal-900 rounded-xl shadow-lg  p-0.5  m-0.5">
        <h2 className="text-3xl font-bold mb-3 text-center mt-4 text-gray-700 dark:text-white  ">
          Skills
        </h2>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 px-1 py-5 mr-8 mt-2 text-gray-700 dark:text-white  ">
          <div className="w-full  px-4 py-5 m-3 rounded-2xl bg-white dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              FrontEnd
            </h1>
            {frontEndSkills.map((skills, index) => {
              return (
                <div
                  className="text-center border-teal-600 border rounded-full m-2"
                  key={index}
                >
                  <h3>{skills.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-full px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              {" "}
              BackEnd
            </h1>
            {backendSkills.map((skills, index) => {
              return (
                <div
                  className="text-center border-teal-600 border rounded-full m-2 "
                  key={index}
                >
                  <h3>{skills.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-full px-2.5 py-3 m-4 rounded-2xl dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              Programming
            </h1>
            {programmingLang.map((skills, index) => {
              return (
                <div
                  className="text-center border-teal-600 border rounded-full m-2"
                  key={index}
                >
                  <h3>{skills.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="w-full  px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              Other Skills
            </h1>
            {otherSkills.map((skills, index) => {
              return (
                <div
                  className="text-center border-teal-600 border rounded-full m-2"
                  key={index}
                >
                  <h3>{skills.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// className="flex flex-col items-center bg-white dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 text-gray-700 dark:text-white  p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
