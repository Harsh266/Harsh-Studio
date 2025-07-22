const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// ✅ Allow frontend to access backend
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// Optional: Keep root route for general check
app.get("/", (req, res) => {
  res.send("Backend is connected and MongoDB is connected!");
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
