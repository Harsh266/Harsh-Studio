import { useEffect, useState } from "react";
import axios from "../api/axios";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await axios.get("/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="min-h-screen bg-black px-6 py-12">
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        🌟 Explore Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg mb-3 w-full h-48 object-cover"
            />
            <h2 className="text-white text-lg font-medium text-center">{project.name}</h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black p-6 rounded-2xl w-full max-w-xl relative shadow-2xl text-white border border-white/10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-8 text-4xl cursor-pointer text-black transition"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="rounded-lg mb-4 w-full max-h-64 object-cover"
              />

              <h2 className="text-2xl font-bold mb-3">{selectedProject.name}</h2>

              <div className="max-h-40 overflow-y-auto pr-2 text-gray-300 text-sm scrollbar-hide custom-scroll">
                {selectedProject.description}
              </div>

              {selectedProject.prototypeLink && (
                <a
                  href={selectedProject.prototypeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                  🔗 View Prototype
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
