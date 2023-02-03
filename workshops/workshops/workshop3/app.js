const express = require("express");
const app = express();
const port = 3000;

let names = ["john", "james", "sally", "sandra"];


app.get("/", (req, res) => {
  const namesHtml = names.map(person => `<h2>${person}</h2>`).join("");
  res.send(namesHtml);
});

app.listen(port);