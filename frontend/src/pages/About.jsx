import { motion } from "framer-motion";
import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer";

export default function About() {
  return (
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
              "/images/ui1.png",
              "/images/digital-summit.jpg",
              "/images/ui2.jpg",
              "/images/finance-ui.png",
              "/images/shipping.png",
              "/images/mobile-app.jpg",
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={img}
                  alt={`project-${idx + 1}`}
                  className="w-full h-28 xs:h-32 sm:h-36 md:h-44 object-cover"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
