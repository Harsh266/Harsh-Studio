import { FaInstagram, FaGithub, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold inline-block"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Let's talk together
          </motion.h2>
          <h3 className="font-bold text-xl">Harsh Studios</h3>
          <p className="text-sm text-gray-600">
            "The future belongs to those who believe in the beauty of their dreams."
          </p>
        </div>

        {/* Center Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pagination</h3>
          <ul className="space-y-2 text-gray-600">
            {["Home", "About me", "Projects", "Contact me"].map((text, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a href={`#${text.toLowerCase().replace(" ", "")}`} className="hover:text-black font-medium">
                  {text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Socials</h3>
          <ul className="space-y-3 text-gray-600">
            <motion.li
              whileHover={{ scale: 1.1, x: 5 }}
              className="flex items-center gap-3 cursor-pointer hover:text-pink-600"
            >
              <FaInstagram size={20} /> Instagram
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, x: 5 }}
              className="flex items-center gap-3 cursor-pointer hover:text-blue-600"
            >
              <FaBehance size={20} /> Behance
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, x: 5 }}
              className="flex items-center gap-3 cursor-pointer hover:text-gray-800"
            >
              <FaGithub size={20} /> GitHub
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © 2025 Harsh Vekariya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
