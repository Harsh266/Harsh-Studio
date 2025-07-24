import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db, auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

function UploadProject() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    prototypeLink: "",
  });


  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const adminEmails = [
    "mehtavrushalvm@gmail.com",
    "harshvekriya441@gmail.com"
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(currentUser && adminEmails.includes(currentUser.email));
    });
    return () => unsubscribe();
  }, []);


  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
    } catch (err) {
      setLoginError("❌ Invalid email or password.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Firestore CRUD
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      setProjects(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (err) {
      alert("❌ Failed to fetch projects.");
    }
  };

  useEffect(() => {
    if (user) fetchProjects();
  }, [user]);

  // Add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateDoc(doc(db, "projects", editId), formData);
        alert("✅ Project updated!");
      } else {
        await addDoc(collection(db, "projects"), formData);
        alert("✅ Project uploaded successfully!");
      }
      setFormData({ name: "", image: "", description: "", prototypeLink: "" });
      setEditId(null);
      fetchProjects();
    } catch (err) {
      alert("❌ Failed to upload/update project.");
    }
  };

  // Edit project
  const handleEdit = (project) => {
    setFormData({
      name: project.name,
      image: project.image,
      description: project.description,
      prototypeLink: project.prototypeLink,
    });
    setEditId(project.id);
  };

  // Delete project
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    } catch (err) {
      alert("❌ Failed to delete project.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {!user ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0e0e0e] border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-4">🔒 Admin Login</h2>
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginChange}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      ) : !isAdmin ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0e0e0e] border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center"
        >
          <h2 className="text-2xl font-bold mb-4">⛔ Access Denied</h2>
          <p className="mb-4">You are not authorized to access this page.</p>
          <button
            onClick={handleLogout}
            className="w-full bg-gray-700 hover:bg-gray-800 p-3 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="bg-[#0e0e0e] border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-center">{editId ? "Edit Project" : "Upload Project"}</h2>
            <button
              onClick={handleLogout}
              className="bg-gray-700 hover:bg-gray-800 p-2 px-4 rounded-lg font-semibold transition text-sm"
            >
              Logout
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Project Title"
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
              {editId ? "Update" : "Upload"}
            </motion.button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setFormData({ name: "", image: "", description: "", prototypeLink: "" });
                }}
                className="w-full mt-2 bg-gray-700 hover:bg-gray-800 p-3 rounded-lg font-semibold transition"
              >
                Cancel Edit
              </button>
            )}
          </form>
          {/* Project List */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <div className="space-y-4 max-h-72 overflow-y-auto">
              {projects.length === 0 && <div className="text-gray-400">No projects found.</div>}
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-900 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="font-semibold text-lg">{project.name}</div>
                    <div className="text-gray-400 text-sm mb-1">{project.description}</div>
                    <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-xs">Prototype</a>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <img src={project.image} alt="img" className="w-16 h-16 object-cover rounded-md border border-gray-700" />
                    <button onClick={() => handleEdit(project)} className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded font-semibold ml-2">Edit</button>
                    <button onClick={() => handleDelete(project.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded font-semibold ml-2">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default UploadProject;
