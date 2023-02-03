const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.contentType("text/plain");
  res.send("<h1>send this text</h1>");
});

app.get("/citisgreat", function (req, res) {
  res.contentType("text/html");
  res.send("<h1>send this text</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});