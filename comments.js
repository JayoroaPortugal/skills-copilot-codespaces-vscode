// Create web server
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

// Add Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Create a route that sends the user to the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Create an array to store the comments
let comments = [];

// Create a route that sends the comments to the client
app.get("/comments", (req, res) => {
  res.send(comments);
});

// Create a route that receives the comments from the client
app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
