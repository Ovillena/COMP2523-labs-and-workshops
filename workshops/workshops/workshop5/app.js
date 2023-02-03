const express = require("express");
let app = express();


app.use(express.static("public"));

// Set view engine to EJS
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    let date = new Date();
    res.render("pages/index", {
        dateVariable: date
    });
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(3000);