const frontEndSkills = [
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind" },
  { name: "React.js" },
  { name: "Next.js" },
];

const GenAi = [
  { name: "OpenAI API" },
  { name: "LangChain" },
  { name: "RAG" },
  { name: "Agents" },
  { name: "OpenAi Agent Sdk" },
  { name: "Vector DB's " },
];
const backendSkills = [
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Mongoose" },
  { name: "MongoDB" },
  { name: "QdrantDb" },
  { name: "PineconeDb" },
  { name: "Postman" },
];

const programmingLang = [{ name: "C" }, { name: "C++" }, { name: "Java" }];
const DevOpsCloud = [
  { name: "Docker" },
  { name: "Kubernetes (basic)" },
  { name: "AWS (basic)" },
  { name: "Render" },
  { name: "Vercel" },
  { name: "Netlify" },
];

const Tools = [{ name: "Git" }, { name: "GitHub" }];

export default function Skills() {
  return (
    <div id="skills" className="flex items-center justify-center mt-4 p-0">
      <section className="bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] text-white shadow-[0_0_10px_#111] rounded-xl   p-0.5  m-0.5">
        <h2 className="text-3xl font-bold text-center mt-4  text-gray-200 dark:text-gray-300 font-chirp ">
          Skills
        </h2>

        <div className=" grid grid-cols-2 md:grid-cols-6 gap-4 px-1 py-5 mr-8  font-chirp">
          <div className="w-full  px-4 py-5 m-3 rounded-2xl bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              FrontEnd
            </h1>
            {frontEndSkills.map((skills, index) => {
              return (
                <div
                  className="text-center border-[#535252]   border-3 rounded-full m-2"
                  key={index}
                >
                  <h3 className=" font-semibold ">{skills.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-full px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              {" "}
              BackEnd
            </h1>
            {backendSkills.map((skills, index) => {
              return (
                <div
                  className="text-center border-[#535252]   border-3 rounded-full m-2 "
                  key={index}
                >
                  <h3 className=" font-semibold "> {skills.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-full px-2.5 py-3 m-4 rounded-2xl dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              Programming
            </h1>
            {programmingLang.map((skills, index) => {
              return (
                <div
                  className="text-center border-[#535252]   border-3 rounded-full m-2"
                  key={index}
                >
                  <h3 className=" font-semibold ">{skills.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="w-full  px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              GenAi
            </h1>
            {GenAi.map((skills, index) => {
              return (
                <div
                  className="text-center border-[#535252]   border-3 rounded-full m-2"
                  key={index}
                >
                  <h3 className=" font-semibold ">{skills.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-full  px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              DevOps/Cloud
            </h1>
            {DevOpsCloud.map((skills, index) => {
              return (
                <div
                  className="text-center border-[#535252]   border-3 rounded-full m-2"
                  key={index}
                >
                  <h3 className=" font-semibold ">{skills.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-full  px-4 py-5 m-4 rounded-2xl dark:bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_0_10px_#111] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h1 className="text-center text-xl md:text-2xl font-semibold ">
              Tools
            </h1>
            {Tools.map((skills, index) => {
              return (
                <div
                  className="text-center border-[#535252]   border-3 rounded-full m-2"
                  key={index}
                >
                  <h3 className=" font-semibold ">{skills.name}</h3>
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
