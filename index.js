const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Learn Coding API is Running");
});

//get all courses data
app.get("/courses", (req, res) => {
  res.send(courses);
});

//get single courses data
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log("Learn Coding server is Running on Port:", port);
});
