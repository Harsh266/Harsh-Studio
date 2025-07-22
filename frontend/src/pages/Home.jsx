import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import About from "../pages/About";

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
    <div className="relative h-screen w-full overflow-hidden hide-scrollbar">
      {/* Fixed Home Section */}
      <div className="fixed inset-0 z-0 bg-[#101010] flex items-center justify-center text-white hide-scrollbar">
        <div className="max-w-6xl w-full px-4">
          <div className="flex flex-col gap-6 items-start">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I'm Harsh Vekariya,<br />
              <span className="block h-[55px] min-w-[300px] sm:h-[90px] md:h-[80px] lg:h-[88px] relative overflow-hidden">
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
                className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300"
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
<About />
    </div>
  );
}
