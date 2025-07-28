import backgroundVideo from "../assets/Dots-5.mp4";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { RiCornerUpRightLine } from "react-icons/ri";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("scrollToAbout") === "1") {
      localStorage.removeItem("scrollToAbout");
      setTimeout(() => {
        const el = document.getElementById("About");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <CustomCursor />

      {/* Hero Section - Fixed */}
      <section
        className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-black z-10"
        id="herosec"
      >
        <video
          muted
          autoPlay
          loop
          playsInline
          src={backgroundVideo}
          className="absolute top-0 left-0 h-full w-full object-cover z-0 opacity-80"
        />

        <div className="relative z-10 h-full w-full flex flex-col justify-center text-white px-6 sm:px-16 gap-4">
          <div className="text-2xl sm:text-6xl font-medium drop-shadow-[0_0_10px_black] flex flex-col items-start leading-tight gap-1">
            <span>I'm Harsh Vekariya, a</span>
            <span className="text-[#ffffff] block w-full min-h-[2.5em]">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer.",
                    "Designer.",
                    "Web Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                  deleteSpeed: 60,
                }}
              />
            </span>
          </div>

          <p className="text-sm sm:text-base sm:w-3/5 bg-black/50 p-3 sm:p-4 rounded-md leading-relaxed font-light">
            I am Harsh Vekariya, a BSc IT student specializing in Data Science. I'm proficient in HTML, CSS, JavaScript, Tailwind CSS, Python, React, Node.js, Express.js, MongoDB, MySQL, Figma, and Adobe XD.
          </p>
        </div>

      </section>

      {/* About Section - Scrollable container */}
      <div
        className="absolute top-0 left-0 w-full h-screen overflow-y-scroll pt-[100vh] z-20"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <section id="About" className="w-full bg-gray-100 text-black rounded-t-3xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row min-h-screen px-4 sm:px-8 py-20 gap-12">
            {/* Left Side: About Me */}
            <div className="sm:w-1/2 w-full flex flex-col justify-center">
              <div className="flex flex-col gap-6 p-2 sm:p-6">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold text-blue-600"
                >
                  About Me
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base sm:text-lg text-gray-700"
                >
                  Hi, I'm <span className="font-bold text-black">Harsh Vekariya</span>, a BSc IT student passionate about building clean, modern digital experiences. I love working with <span className="text-black font-semibold">React.js, Tailwind, Node.js, Express.js, Python</span> and more.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
                >
                  <Link
                    to="/projects"
                    className="group bg-blue-600 hover:bg-blue-700 w-fit px-5 py-2 rounded-full flex items-center gap-2 text-white text-base font-medium transition-all duration-300 shadow hover:shadow-lg"
                  >
                    See Projects
                    <RiCornerUpRightLine className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Project Gallery */}
            <div className="sm:w-1/2 w-full flex flex-col justify-center">
              <p className="pb-4 font-semibold text-lg text-gray-800">
                Some of my Projects. Hope you like it. 😊
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "/images/Mockup 1.png",
                  "/images/Thumbnail - 2.png",
                  "/images/Mockup 3.png",
                  "/images/Mockup 4.png",
                  "/images/Mockup 5.png",
                  "/images/Mockup.png",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition duration-300 group"
                  >
                    <img
                      src={src}
                      alt={`Project ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </section>

      </div>
    </div>
  );
}
