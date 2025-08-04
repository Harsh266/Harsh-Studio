import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 text-white bg-hero-gradient text-center overflow-hidden"
      >
        <CustomCursor />
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Connect With Us – Let’s Elevate Your Brand!
          </motion.h1>

          <motion.p
            className="text-gray-200 mb-6 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Choose a plan that fits your goals and budget, offering scalable
            solutions with transparent pricing and friction-free onboarding.
          </motion.p>
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-12 bg-white text-black text-center w-full">
        {/* Contact Item */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
          <div className="bg-black text-white p-3 rounded-xl">
            <FaEnvelope className="text-xl" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Live Chat</p>
            <a
              href="mailto:harshvekriya441@gmail.com"
              className="underline text-sm text-black break-all"
            >
              harshvekriya441@gmail.com
            </a>
          </div>
        </div>

        {/* Visit Us */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
          <div className="bg-black text-white p-3 rounded-xl">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Visit Us</p>
            <p className="underline text-sm text-black">Navrangpura Ahmedabad</p>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
          <div className="bg-black text-white p-3 rounded-xl">
            <FaPhoneAlt className="text-xl" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Call Us</p>
            <a href="tel:+918128299287" className="underline text-sm text-black">
              +91 8128299287
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-6 md:px-40 py-12 bg-white text-black">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-semibold mb-2 text-center">Chat with Us</h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Get Instant Support – Chat with me for Quick Assistance and Expert Guidance Anytime!
          </p>

          {/* Form */}
          <form className="bg-white rounded-md">
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


      <Footer />
    </>
  );
}

export default Contact;
