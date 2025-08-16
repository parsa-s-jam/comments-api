const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Load JSON data
const data = require("./data.json");

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Render API 🚀" });
});

// JSON endpoint
app.get("/comments", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
