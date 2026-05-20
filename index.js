const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

console.log("App started...");

// FORCE DEBUG CONNECTION
mongoose
  .connect("mongodb+srv://zain:zain3199@cluster0.gadzvep.mongodb.net/mydb")
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB ERROR ❌");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello from Node.js API 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
