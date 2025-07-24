import backgroundVideo from "../assets/Dots-5.mp4";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { RiCornerUpRightLine } from "react-icons/ri";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

export default function Home() {

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

        <div className="relative z-10 h-full w-full flex flex-col justify-center text-white px-6 sm:px-16 gap-6">
          <div className="text-3xl sm:text-7xl font-bold drop-shadow-[0_0_15px_black] flex flex-wrap items-center gap-2">
            <span>I'm Harsh Vekariya, a</span>
            <span className="text-[#ffffff]">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer.",
                    "Designer.",
                    "Web Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>

          <p className="text-xs sm:text-base sm:w-4/5 bg-black bg-opacity-60 p-2 sm:p-4 rounded-md leading-relaxed">
            I am Harsh Vekariya, a BSc IT student specializing in Data Science. I am
            proficient in HTML, CSS, JavaScript, Tailwind CSS, Python,
            PHP, DSA, React, Node.js, Express.js, MongoDB, MySQL, Figma, and Adobe XD.
          </p>

          <motion.a
            href="/your-cv.pdf" // replace with your file or section link
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="group relative w-fit px-6 py-3 rounded-full border-2 border-white/40 backdrop-blur-md bg-white/20 flex items-center gap-4 cursor-pointer overflow-hidden text-white"
          >
            {/* Expanding blue background */}
            <motion.span
              layout
              layoutId="circle"
              className="absolute top-0 right-0 w-4 h-4 bg-[#2E6BFA] rounded-full z-0 origin-top-right scale-0 group-hover:scale-[25] transition-all duration-700 ease-in-out"
            />

            {/* Button text */}
            <span className="relative z-10 text-base sm:text-lg font-medium transition-transform duration-300 group-hover:translate-x-1">
              Download CV
            </span>

            {/* Arrow Icon */}
            <span className="relative z-10 bg-[#2E6BFA] text-xl sm:text-2xl text-black rounded-full py-1 px-3 transition-transform duration-300 group-hover:scale-110">
              <RiCornerUpRightLine />
            </span>
          </motion.a>
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

        <section
          id="About"
          className="w-full bg-gray-100 text-black rounded-t-3xl"
        >
          <div className="flex flex-col sm:flex-row w-full min-h-screen overflow-hidden px-6 py-25 gap-y-12 sm:gap-y-0 sm:gap-x-8">
            {/* Left Side: About Me */}
            <div className="sm:w-1/2 w-full flex flex-col justify-center">
              <div className="flex flex-col gap-4 h-full">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl font-bold text-[#2E6BFA] tracking-wide"
                >
                  About Me
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-medium sm:text-2xl text-2xl mt-2"
                >
                  Hello, I'm <span className="font-bold text-black">Harsh Vekariya</span>,
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-medium text-sm leading-8 text-gray-800 "
                >
                  I’m Harsh Vekariya, a BSc IT student with a specialization in Data Science. I’m skilled in technologies like{" "}
                  <span className="text-black font-bold px-1 rounded">
                    HTML, CSS, JavaScript, Tailwind CSS, Java, Python, SQL, PHP, DSA, React.js, Node.js, Express.js, MongoDB
                  </span>{" "}
                  and UI/UX tools such as{" "}
                  <span className="text-black font-bold px-1 rounded">Figma and Adobe XD</span>. I’m passionate about building
                  intuitive and visually pleasing digital experiences.
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                  href="/projects"
                  className="group relative bg-black w-fit px-6 py-3 rounded-full flex gap-2 mt-6 cursor-pointer text-white text-lg font-medium items-center transition-all duration-300 hover:pr-10"
                >
                  See all Projects
                  <RiCornerUpRightLine
                    className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                  />
                </motion.a>
              </div>
            </div>

            {/* Right Side: Project Gallery */}
            <div className="sm:w-1/2 w-full flex flex-col text-black justify-center">
              <p className="pb-4 font-bold text-lg">
                Some of my Projects. Hope you like it. 😊
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "https://cdn.dribbble.com/userupload/14315397/file/original-b2d9fa368a9fb4cdd8575ee4ecef06c5.jpg?resize=400x300&vertical=center",
                  "https://cdn.dribbble.com/userupload/14358758/file/original-fe8d50a2a20252e11da5aa48e7a9c5f4.png?resize=400x300&vertical=center",
                  "https://cdn.dribbble.com/userupload/11438126/file/still-1cded3562249cd2125b72c65cacc0948.png?resize=400x300&vertical=center",
                  "https://cdn.dribbble.com/userupload/12455906/file/original-d7978c76110fc6f5be9b0742854972cb.png?crop=0x0-2052x1539&resize=400x300&vertical=center",
                  "https://cdn.dribbble.com/userupload/15011616/file/original-0bdc307bbd21d0b238bca58bfe5a5685.png?resize=400x300&vertical=center",
                  "https://cdn.dribbble.com/userupload/16092344/file/original-077c8614e3795032508401ebd6920a6f.png?resize=400x300&vertical=center",
                ].map((src, i) => (
                  <div
                    className="aspect-square bg-white group cursor-pointer overflow-hidden rounded-lg shadow-md transition hover:shadow-lg"
                    key={i}
                  >
                    <img
                      src={src}
                      alt={`Project ${i + 1}`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
