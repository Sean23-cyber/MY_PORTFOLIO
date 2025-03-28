import { motion } from "framer-motion";

export default function Home() {
  const data = {
    name: "Aryan Chaturvedi",
    about: "Aspiring software developer passionate about building scalable web applications.",
    skills: ["Node.js", "React.js", "Express.js", "MongoDB"],
    projects: [
      { name: "Portfolio Site", description: "A beautiful portfolio built with React and Tailwind CSS.", link: "#" },
      { name: "API Service", description: "A RESTful API built using Express and MongoDB.", link: "#" }
    ]
  };

  return (
    <div className="container mx-auto p-6 text-white bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h1>

      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="text-gray-400"><strong>About:</strong> {data.about}</p>

        <h3 className="mt-4 text-xl font-semibold">Skills:</h3>
        <ul className="list-disc pl-5">
          {data.skills.map((skill, index) => (
            <motion.li
              key={index}
              className="text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>

        <h3 className="mt-4 text-xl font-semibold">Projects:</h3>
        <div className="mt-2">
          {data.projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700 p-4 rounded-lg mt-2 hover:bg-gray-600 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <strong>{project.name}:</strong> {project.description}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
