const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Learn Coding API is Running");
});

app.listen(port, () => {
  console.log("Learn Coding server is Running on Port:", port);
});
