import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import { FaProjectDiagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

export default function Home() {
  const roles = ["Web Developer", "Designer", "Software Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full scrollbar-hide custom-scroll">
      {/* Fixed Home Section */}
      <div className="fixed inset-0 z-0 bg-black flex items-center justify-center text-white overflow-y-auto scroll-smooth">
        <div className="max-w-6xl w-full px-4">
          <div className="flex flex-col gap-2 items-start">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I'm Harsh Vekariya,<br />
              <span className="block h-[60px] min-w-[800px] sm:h-[90px] md:h-[80px] lg:h-[100px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    className="absolute text-blue-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    a {roles[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              className="mb-10 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              Harsh Studios brings your ideas to life with{" "}
              <span className="font-semibold text-blue-300">software development</span>
              {" "}and{" "}
              <span className="font-semibold text-pink-300">innovative designs</span>.
              Let’s create something extraordinary together.
            </motion.p>

            <motion.a
              href="/Your_CV.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center w-fit px-8 py-4 rounded-full border-2 border-white text-white bg-white/10 transition-all duration-300 text-lg sm:text-xl font-medium shadow-lg"
            >
              Download CV
              <motion.span
                className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white"
                variants={{
                  hover: {
                    x: 6,
                    rotate: 90,
                    backgroundColor: "#ffffff",
                    color: "#2563eb",
                  },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scrollable Section */}
      <div
        id="about"
        className="absolute top-0 left-0 w-full h-full overflow-y-auto scroll-smooth z-10 pt-[100vh] hide-scrollbar"
      >
        <div className="bg-white text-black px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-24 rounded-t-[24px] shadow-2xl min-h-[100vh] transition-colors duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block mb-2 text-blue-600">About Me</span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I’m <strong>Harsh Vekariya</strong>, a BSc IT student with a
                specialization in Data Science. I’m skilled in technologies like
                <strong> HTML, CSS, JavaScript, Tailwind CSS, Java, Python, SQL,
                  PHP, DSA, React.js, Node.js, Express.js, MongoDB</strong>, and
                UI/UX tools such as <strong>Figma</strong> and <strong>Adobe XD</strong>. I’m passionate about building
                intuitive and visually pleasing digital experiences.
              </motion.p>

              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full text-base md:text-lg font-medium bg-black text-white shadow-md hover:bg-gray-900 transition"
              >
                <FaProjectDiagram />
                See All Projects
                <MdKeyboardArrowRight className="text-xl" />
              </motion.a>
            </div>

            {/* Project Thumbnails */}
            <motion.div
              className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="col-span-2 sm:col-span-3 text-center sm:text-left text-base sm:text-lg font-medium mb-2 text-slate-700">
                Some of my Projects. Hope you like it. 😊
              </p>

              {[
                "/images/Mockup 2.png",
                "/images/Thumbnail - 2.png",
                "/images/Mockup 3.png",
                "/images/Mockup 5.png",
                "/images/Mockup 4.png",
                "/images/Mockup 1.png",
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow hover:shadow-xl "
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <img
                    src={img}
                    alt={`project-${idx + 1}`}
                    className="w-full h-28 xs:h-32 sm:h-36 md:h-44 object-cover cursor-pointer"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ✅ Skills Section */}
          <div className="mt-20">
            <motion.h3
              className="text-3xl font-bold text-center text-gray-900 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Skills
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {[
                { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
                { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
                { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
                { icon: <FaReact className="text-blue-400" />, name: "React.js" },
                { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
                { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
                { icon: <FaPython className="text-blue-500" />, name: "Python" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
