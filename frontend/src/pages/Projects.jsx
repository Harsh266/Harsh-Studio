
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Something went wrong while fetching projects.");
      } finally {
        setLoading(false);
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


        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-14 h-14 border-4 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-black font-medium text-lg">Loading projects...</span>
          </div>
        ) : (
          <>
            {error && (
              <p className="text-red-500 text-center mb-6">{error}</p>
            )}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-white rounded-xl p-4 w-full max-w-sm transition-all shadow-md border-2 border-transparent hover:border-blue-400 hover:shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={
                      project.image
                        ? project.image.startsWith("http") || project.image.startsWith("/")
                          ? project.image
                          : `/images/${project.image}`
                        : "https://via.placeholder.com/400x300?text=No+Image"
                    }
                    alt={project.name || "Project Image"}
                    className="rounded-md w-full h-48 object-cover"
                  />
                  <h2 className="text-center text-lg font-semibold mt-4">
                    {project.name || "Untitled Project"}
                  </h2>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* MODAL */}
        <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-2xl w-full max-w-[700px] h-[550px] shadow-2xl relative flex flex-col"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-6 text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
        >
          Close
        </button>

        <img
          src={
            selectedProject.image
              ? selectedProject.image.startsWith("http") || selectedProject.image.startsWith("/")
                ? selectedProject.image
                : `/images/${selectedProject.image}`
              : "https://via.placeholder.com/600x400?text=No+Preview"
          }
          alt={selectedProject.name}
          className="rounded-md mb-4 w-full max-h-[300px] object-cover"
        />

        <h2 className="text-xl font-bold mb-2">
          {selectedProject.name}
        </h2>

        <p className="text-gray-700 max-h-[120px] overflow-y-auto hide-scrollbar text-base">
          {selectedProject.description || "No description available."}
        </p>

        {selectedProject.prototypeLink && (
          <motion.a
            href={selectedProject.prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 inline-block w-fit px-5 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition text-sm"
          >
            🔗 View Prototype
          </motion.a>
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
