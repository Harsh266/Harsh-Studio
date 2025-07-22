import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaBehance, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", to: "#about" },
    { name: "Contact", link: "/contact" },
    { name: "Portfolio", link: "/portfolio" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50 px-6 sm:px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <motion.div
        className="text-2xl font-bold tracking-tight text-slate-900"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Harsh Studio
      </motion.div>

      {/* Desktop Nav */}
      <motion.ul
        className="hidden md:flex space-x-8 font-medium text-slate-900"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#0F62B0" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={item.link}
              className={`transition-colors duration-200 ${
                location.pathname === item.link ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Social Icons */}
      <motion.div
        className="hidden md:flex items-center space-x-5 text-2xl text-slate-900"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.a
          href="https://instagram.com"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#E1306C" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://behance.net"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#1769FF" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaBehance />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#000000" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
      </motion.div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-slate-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col px-6 py-8 space-y-6"
          >
            <div className="flex justify-end items-center">
              <button onClick={() => setIsOpen(false)} className="text-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <ul className="space-y-4 font-medium text-slate-800">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.link}
                    className="block hover:text-blue-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex gap-6 mt-6 text-2xl text-slate-800">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#E1306C" }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://behance.net"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#1769FF" }}
              >
                <FaBehance />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#000000" }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
