const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // store URL for now
  description: { type: String, required: true },
  prototypeLink: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
