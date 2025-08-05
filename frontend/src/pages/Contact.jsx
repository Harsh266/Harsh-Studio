import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";

function Contact() {

  // Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

  const [showScrollTop, setShowScrollTop] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      toast.success("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 text-white bg-hero-gradient text-center overflow-hidden">
  <CustomCursor />

  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="px-6 md:px-40 py-12 text-black"
  >
    <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl text-white font-semibold mb-2 text-center"
      >
        Chat with Us
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-sm text-gray-200 text-center mb-8"
      >
        Get Instant Support – Chat with me for Quick Assistance and Expert Guidance Anytime!
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={itemVariants}
        className="rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.input
            variants={itemVariants}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name *"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <motion.input
            variants={itemVariants}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name *"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <motion.input
          variants={itemVariants}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <motion.textarea
          variants={itemVariants}
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message here..."
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></motion.textarea>
        <motion.button
          variants={itemVariants}
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition duration-300 cursor-pointer"
        >
          Sent to Us
        </motion.button>
        <motion.p
          variants={itemVariants}
          className="text-xs text-center text-gray-600 mt-4"
        >
          By Contacting us, you agree to our{" "}
          <span>Terms</span> of service and <span>privacy Policy</span>.
        </motion.p>
      </motion.form>
    </motion.div>
  </motion.div>
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
