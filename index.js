const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

// Middleware (important for APIs)
app.use(express.json());

// =====================
// MongoDB CONNECTION
// =====================
mongoose
  .connect("mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/mydb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// =====================
// TEST ROUTE
// =====================
app.get("/", (req, res) => {
  res.send("Hello from Node.js API 🚀");
});

// =====================
// START SERVER
// =====================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
