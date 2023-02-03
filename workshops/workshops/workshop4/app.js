/* Uncomment Below for req.query version */
const express = require("express");
let app = express();

// test: http://localhost:3000/hello?firstName=john&lastName=smith
app.get("/hello", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  if (firstName === undefined || lastName === undefined) {
    res.send("<p>Please add a first and last name!</p>");
  } else {
    res.send(`<p>Hi ${firstName} ${lastName}</p>`);
  }
});

/* Uncomment Below for req.params version */
// test: http://localhost:3000/hello/john/smith

// app.get("/hello/:firstName/:lastName", (req, res)=> {
//     let firstName = req.params.firstName;
//     let lastName = req.params.lastName;
//     res.send(`<p>Hi ${firstName} ${lastName}</p>`)
// })

app.listen(3000);
