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
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 20;

    // Ensure data is an array
    const items = Array.isArray(data) ? data : [];

    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / perPage);

    // Slice for pagination
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedItems = items.slice(start, end);

    res.json({
      items: paginatedItems,
      meta: {
        currentPage: page,
        perPage: perPage,
        totalPages: totalPages,
        totalItems: totalItems,
      },
    });
  } catch (err) {
    console.error("Error in /comments:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
