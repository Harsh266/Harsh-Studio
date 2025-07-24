import { useState } from "react";
import { motion } from "framer-motion";
// import axios from "../api/axios";

function UploadProject() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    prototypeLink: "",
  });

  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "Harsh@123"; // ✅ Set your custom password here

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("❌ Incorrect password!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/projects", formData);
      alert("✅ Project uploaded successfully!");
      setFormData({ name: "", image: "", description: "", prototypeLink: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to upload project.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {!isAuthenticated ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0e0e0e] border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-4">🔒 Enter Password</h2>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition"
            >
              Unlock
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="bg-[#0e0e0e] border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Upload Project</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="description"
              placeholder="Project Description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="prototypeLink"
              placeholder="Prototype Link"
              value={formData.prototypeLink}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition"
            >
              Upload
            </motion.button>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default UploadProject;
