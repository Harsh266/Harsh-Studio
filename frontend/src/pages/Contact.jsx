import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import React from "react";
import { TbArrowBigUpLines } from "react-icons/tb";

function Contact() {

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // show button after 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 text-white bg-hero-gradient text-center overflow-hidden"
      >
        <CustomCursor />
        <div className="px-6 md:px-40 py-12 text-black">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl text-white font-semibold mb-2 text-center">Chat with Us</h2>
          <p className="text-sm text-gray-200 text-center mb-8">
            Get Instant Support – Chat with me for Quick Assistance and Expert Guidance Anytime!
          </p>

          {/* Form */}
          <form className="rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name *"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Last name *"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Message here..."
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purplele-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition duration-300 cursor-pointer"
            >
              Sent to Us
            </button>
            <p className="text-xs text-center text-gray-600 mt-4">
              By Contacting us, you agree to our{" "}
              <span>Terms</span> of service
              and{" "}
              <span>privacy Policy</span>.
            </p>
          </form>
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

export default Contact;
