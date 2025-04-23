// server.js 
const Inquiry = require("./models/Inquiry"); 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Route to handle form submission
app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newEntry = new Inquiry({ name, email, message });
    await newEntry.save();
    res.status(200).send("Message sent successfully");
  } catch (err) {
    res.status(500).send("Error saving inquiry");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
