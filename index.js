const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB CONNECTION
mongoose
  .connect(
    "mongodb+srv://zain:zain3199@cluster0.gadzvep.mongodb.net/mydb?retryWrites=true&w=majority",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hello from Node.js API 🚀");
});

// START SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
