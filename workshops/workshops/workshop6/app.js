const express = require("express");
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let databaseOfUsernames = ["john123", "bobby441", "cststudent1005"];

const MESSAGES = {
  SUCCESS: "You exist in the database!",
  FAILURE: "You do not exist in the database!",
};

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/myForm", (req, res) => {
  res.render("pages/myForm");
});

app.post("/myForm", (req, res) => {
  let formData = req.body;
  console.log(formData);
  let userName = formData.username;
  if (databaseOfUsernames.includes(userName)) {
    res.render("pages/result", { result: MESSAGES.SUCCESS });
  } else {
    res.render("pages/result", { result: MESSAGES.FAILURE });
  }
});

app.listen(3000);
