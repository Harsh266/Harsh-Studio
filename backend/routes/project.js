const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// POST /api/projects
router.post("/", async (req, res) => {
  try {
    const { name, image, description, prototypeLink } = req.body;
    const project = new Project({ name, image, description, prototypeLink });
    await project.save();
    res.status(201).json({ message: "Project added", project });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
