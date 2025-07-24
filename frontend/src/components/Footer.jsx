import { FaInstagram, FaGithub, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold inline-block transition-colors duration-300 hover:text-blue-600 cursor-pointer"
            whileHover={{ scale: 1.08, x: 8, color: '#2563eb' }}
            transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
          >
            Let's talk together
          </motion.h2>
          <h3 className="font-bold text-xl">Harsh Studios</h3>
          <p className="text-sm text-gray-600">
            "The storm is easiest to fight when it's still far on the horizon. Prepare before it arrives, not after it hits."
          </p>
        </div>

        {/* Center Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pagination</h3>
          <ul className="space-y-2 text-gray-600">
            <motion.li
              whileHover={{ scale: 1.13, x: 10, color: '#2563eb' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
            >
              <Link to="/" className="hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.13, x: 10, color: '#2563eb' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
            >
              <a href="#aboutme" className="hover:text-blue-600 font-medium transition-colors duration-200">About me</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.13, x: 10, color: '#2563eb' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
            >
              <Link to="/projects" className="hover:text-blue-600 font-medium transition-colors duration-200">Projects</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.13, x: 10, color: '#2563eb' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
            >
              <Link to="/contact" className="hover:text-blue-600 font-medium transition-colors duration-200">Contact me</Link>
            </motion.li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Socials</h3>
          <ul className="space-y-3 text-gray-600">
            <motion.li
              whileHover={{ scale: 1.15, x: 12, color: '#e1306c' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <a
                href="https://instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-600 transition-colors duration-200"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.15, x: 12, color: '#1769ff' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <a
                href="https://www.behance.net/harshvekariya2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200"
              >
                <FaBehance size={20} /> Behance
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.15, x: 12, color: '#24292f' }}
              transition={{ duration: 0.18, type: 'spring', stiffness: 350 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <a
                href="https://github.com/Harsh266"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200"
              >
                <FaGithub size={20} /> GitHub
              </a>
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
