import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          throw new Error("Response is not an array");
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Something went wrong while fetching projects.");
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-[#f5f5f5] px-6 py-16 text-black">
      <CustomCursor />

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      {error && (
        <p className="text-red-500 text-center mb-6">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-white rounded-xl p-4 w-full max-w-sm transition-all shadow-md border-2 border-transparent hover:border-blue-400 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={project.image || "https://via.placeholder.com/400x300?text=No+Image"}
              alt={project.name || "Project Image"}
              className="rounded-md w-full h-48 object-cover"
            />
            <h2 className="text-center text-lg font-semibold mt-4">
              {project.name || "Untitled Project"}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl w-full max-w-3xl shadow-2xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-6 text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Close
              </button>

              <img
                src={selectedProject.image || "https://via.placeholder.com/600x400?text=No+Preview"}
                alt={selectedProject.name}
                className="rounded-md mb-4 w-full max-h-[300px] object-cover"
              />

              <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
              <p className="text-gray-700 max-h-[120px] overflow-y-auto">
                {selectedProject.description || "No description available."}
              </p>

              {selectedProject.prototypeLink && (
                <a
                  href={selectedProject.prototypeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block px-5 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition"
                >
                  🔗 View Prototype
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
    <Footer />
    </>
  );
}

export default Projects;
