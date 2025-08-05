import { FaBehance, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("About");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#About");
      setTimeout(() => {
        const aboutSection = document.getElementById("About");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", onClick: handleAboutClick }, // Custom handler
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
    exit: { x: "-100%", transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <nav className="py-5 bg-black w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-xl font-bold cursor-pointer"
        >
          Harsh-Studio
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item, i) => (
            <motion.li
              key={item.name}
              custom={i + 1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-3"
        >
          <a
            href="https://www.instagram.com/harsh_vekariya_24"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black p-2 hover:bg-white/10 transition"
          >
            <FaInstagram className="text-white text-lg" />
          </a>
          <a
            href="https://www.behance.net/harshvekariya2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black p-2 hover:bg-white/10 transition"
          >
            <FaBehance className="text-white text-lg" />
          </a>
          <a
            href="https://github.com/Harsh266"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black p-2 hover:bg-white/10 transition"
          >
            <FaGithub className="text-white text-lg" />
          </a>
        </motion.div>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="text-white text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-white text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar + Blur */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed top-0 left-0 w-70 h-full bg-black flex flex-col p-6 z-40"
            >
              <ul className="flex flex-col space-y-6 mt-12">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {item.onClick ? (
                      <button
                        onClick={() => {
                          item.onClick();
                          setIsOpen(false);
                        }}
                        className="text-gray-200 text-lg hover:text-white transition-colors duration-300"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-200 text-lg hover:text-white transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Sidebar Socials */}
              <div className="mt-10">
                <div className="flex gap-4 mb-4">
                  <a
                    href="https://www.instagram.com/harsh_vekariya_24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-2 hover:bg-gray-300 transition"
                  >
                    <FaInstagram className="text-black text-lg" />
                  </a>
                  <a
                    href="https://www.behance.net/harshvekariya2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-2 hover:bg-gray-300 transition"
                  >
                    <FaBehance className="text-black text-lg" />
                  </a>
                  <a
                    href="https://github.com/Harsh266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-2 hover:bg-gray-300 transition"
                  >
                    <FaGithub className="text-black text-lg" />
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
