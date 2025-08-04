import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import React from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAdobexd,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useState, useEffect } from "react";

// ✅ Firebase
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Python", icon: <FaPython className="text-blue-900" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <VscVscode className="text-blue-600" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-purple-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "MongoDB Compass", icon: <SiMongodb className="text-green-600" /> },
  ];

  const controlsSkills = useAnimation();
  const controlsTools = useAnimation();

  useEffect(() => {
    const totalScroll = skills.length * 140;

    const startAnimation = async () => {
      while (true) {
        await controlsSkills.start({
          x: `-${totalScroll}px`,
          transition: { duration: 15, ease: "linear" },
        });
        controlsSkills.set({ x: "0px" });
      }
    };

    startAnimation();
  }, [controlsSkills]);

  useEffect(() => {
    const totalScroll = tools.length * 140;

    const loopAnimation = async () => {
      while (true) {
        await controlsTools.start({
          x: `-${totalScroll}px`,
          transition: { duration: 15, ease: "linear" },
        });
        controlsTools.set({ x: "0px" });
      }
    };

    loopAnimation();
  }, [controlsTools, tools.length]);

  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 300); // show button after 300px
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 text-white bg-hero-gradient overflow-hidden">
        <CustomCursor />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] mb-10">
            Real Projects,<br />
            Thoughtful Design,<br />
            Impactful Solutions.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl">
            Explore a curated selection of my work—crafted with creativity, built with modern technologies, and designed to solve real-world problems. Each project reflects my commitment to innovation, detail, and user-focused experiences.
          </p>
        </motion.div>
      </div>

      <div className="px-6 md:px-20 py-12 bg-white min-h-[55vh] relative z-0">
        <h2 className="text-3xl font-semibold mb-8 text-black">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 cursor-pointer">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.04, y: -6 }}
              className="bg-white rounded-2xl shadow-md ring-1 ring-black/10 transition duration-300 group flex flex-col overflow-hidden"
            >
              <div className="aspect-[14/9] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full transition"
                />
              </div>
              <div className="bg-white px-5 py-4 rounded-b-2xl shadow-inner flex flex-col gap-2">
                <h3 className="text-black text-lg font-semibold truncate">{project.name}</h3>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-violet-600 hover:text-violet-800 flex items-center gap-1 transition cursor-pointer"
                >
                  View Project <FaExternalLinkAlt className="ml-1 text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto hide-scrollbar">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-black text-2xl font-bold cursor-pointer transition z-10"
              >
                &times;
              </button>
              <div className="p-6 pt-12">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {selectedProject.name}
                </h3>
                <div className="max-h-48 overflow-y-auto hide-scrollbar">
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>
                </div>
                {selectedProject.prototypeLink && (
                  <motion.a
                    href={selectedProject.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-2 px-6 py-2 bg-violet-500 text-white text-sm font-medium rounded hover:bg-violet-600 transition"
                  >
                    🔗 View Prototype
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="overflow-hidden w-full bg-white py-12 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-black text-transparent bg-clip-text">My Skills</span>
          </h2>
          <div className="relative w-full overflow-hidden px-4">
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-10 w-max"
              animate={controlsSkills}
              initial={{ x: 0 }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] space-y-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl animate-spin-slow">{skill.icon}</div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="overflow-hidden w-full bg-white py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-purple-500 text-transparent bg-clip-text">
              Tools I Use
            </span>
          </h2>
          <div className="relative w-full overflow-hidden px-4">
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-10 w-max"
              animate={controlsTools}
              initial={{ x: 0 }}
            >
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] space-y-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl animate-spin-slow">{tool.icon}</div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                    {tool.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      {showScrollTop && (
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 hover:bg-purple-700 text-white text-2xl sm:text-3xl rounded-full shadow-xl flex items-center justify-center transition-all"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <TbArrowBigUpLines   />
                </motion.span>
              </motion.button>
            )}
      
    </>
  );
}

export default Portfolio;
