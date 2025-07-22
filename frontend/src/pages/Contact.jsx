import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 text-white">
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="mt-1 block w-full px-4 py-2 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-white text-black py-2 rounded-md font-semibold transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
