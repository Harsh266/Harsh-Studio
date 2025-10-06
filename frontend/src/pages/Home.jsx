import { motion, useAnimation } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import Typewriter from "typewriter-effect";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { TbArrowBigUpLines } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

// Placeholder images – replace these imports with your actual images if available




function Home() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  ];

  const controlsSkills = useAnimation();

  useEffect(() => {
    const totalScroll = skills.length * 140; // adjust based on actual width

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // show button after 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <div
        id="Home"
        className="relative w-full min-h-screen flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 text-white bg-hero-gradient overflow-hidden text-left"
      >
        <CustomCursor />
        {/* Title */}
        <div className="w-full max-w-4xl text-4xl xs:text-5xl sm:text-9xl md:text-6xl lg:text-7xl font-semibold drop-shadow-[0_0_10px_black] leading-tight gap-1">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I'm Harsh Vekariya, a
          </motion.span>

          <span className="text-[#ffffff] block w-full min-h-[1em] mt-2">
            <Typewriter
              options={{
                strings: ["Software Developer.", "Designer.", "Web Developer."],
                autoStart: true,
                loop: true,
                delay: 120,
                deleteSpeed: 60,
              }}
            />
          </span>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-md xs:text-md sm:text-lg md:text-lg text-white mt-6 sm:mt-8 leading-relaxed font-light p-2 sm:p-4 rounded-md"
          >
            I am Harsh Vekariya, a BSc IT student specializing in Data Science. I'm
            proficient in HTML, CSS, JavaScript, Tailwind CSS, Python, React, Node.js,
            Express.js, MongoDB, MySQL, Figma, and Adobe XD.
          </motion.p>
        </div>

        {/* CTA Button */}
        <a
          href="https://drive.google.com/file/d/1_-jPfmDODzNN1-W1-_vEDpwmE6c64qdB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 sm:mt-8 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-semibold hover:bg-gray-200 transition flex items-center gap-2 cursor-pointer text-sm sm:text-base"
          >
            Download CV
            <span className="text-base sm:text-xl">➜</span>
          </motion.button>
        </a>

      </div>


      {/* ABOUT SECTION */}
      <div id="About" className="bg-white w-full py-16 transition-all">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 px-4 md:px-16">

          {/* Left side title */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center bg-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-right">
              About <span className="text-purple-500">Me</span>
            </h2>
          </motion.div>

          {/* Right side description */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center bg-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left md:text-left max-w-xl">
              I'm <span className="font-bold text-black">Harsh Vekariya</span>, a BSc IT student focused on Data Science.&nbsp;
              I'm skilled in <span className="font-bold">web development</span>, <span className="font-bold">programming</span>, and <span className="font-bold">UI/UX design</span>.<br /><br />
              I'm currently learning <span className="text-purple-600 font-semibold">AI/ML</span> and use tools like
              <span className="font-bold"> React</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">Express.js</span>, <span className="font-bold">MongoDB</span>, <span className="font-bold">Tailwind</span>, <span className="font-bold">Java</span>,
              <span className="font-bold"> Python</span>,
              <span className="font-bold"> Adobe XD</span>, and <span className="font-bold">Figma</span>
              to build complete digital solutions.
            </p>
          </motion.div>

        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="overflow-hidden w-full bg-white py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-black text-transparent bg-clip-text">
            Technologies I <span className="text-purple-600">Work With</span>
          </span>
        </h2>

        <div className="relative w-full overflow-x-auto mt-12 hide-scrollbar mt-16">
          <motion.div
            className="flex gap-6 sm:gap-10 min-w-max sm:min-w-full justify-start sm:justify-center"
            animate={controlsSkills}
            initial={{ x: 0 }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[80px] sm:min-w-[120px] space-y-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-5xl animate-spin-slow">{skill.icon}</div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* PROJECT SHOWCASE SECTION */}
      <div className="bg-white w-full py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
            <div>
              <span className="px-3 py-1 rounded-full border border-gray-300 text-xs sm:text-sm text-gray-800 font-semibold mb-2 inline-block">
                🟣 Latest Projects
              </span>
              <h2 className="font-bold text-2xl md:text-3xl text-black leading-tight">
                Showcasing Creativity,<br />
                Inspiring Possibilities
              </h2>
            </div>
            <Link
              to="/portfolio"
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 text-xs sm:text-sm font-semibold text-gray-700 hover:text-purple-700 transition-all uppercase tracking-wider"
            >
              SEE ALL PORTFOLIO <span aria-hidden>→</span>
            </Link>

          </div>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* First Project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow bg-gray-100 group"
            >
              <img
                src="/images/Mockup 1.png"
                alt="Luxious Project"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </motion.div>

            {/* Second Project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow bg-gray-100 group"
            >
              <img
                src="/images/Mockup 3.png"
                alt="Emperhia Project"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </motion.div>

            {/* Full-width third project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative md:col-span-2 w-full aspect-[18/9] rounded-2xl overflow-hidden shadow bg-gray-100 group"
            >
              <img
                src="/images/Thumbnail - 2.png"
                alt="Nutritionous Project"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
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
            <TbArrowBigUpLines />
          </motion.span>
        </motion.button>
      )}

    </>
  );
}

export default Home;
