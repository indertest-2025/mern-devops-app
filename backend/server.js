require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend API working"
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});