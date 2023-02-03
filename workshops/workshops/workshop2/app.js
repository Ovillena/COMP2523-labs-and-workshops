const express = require("express");
const app = express();
const port = 3000;

let myHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem optio obcaecati vitae porro reiciendis quas ullam ex, totam quibusdam est quae provident voluptates earum. Nulla perferendis vero ad quibusdam nobis.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem optio obcaecati vitae porro reiciendis quas ullam ex, totam quibusdam est quae provident voluptates earum. Nulla perferendis vero ad quibusdam nobis.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem optio obcaecati vitae porro reiciendis quas ullam ex, totam quibusdam est quae provident voluptates earum. Nulla perferendis vero ad quibusdam nobis.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem optio obcaecati vitae porro reiciendis quas ullam ex, totam quibusdam est quae provident voluptates earum. Nulla perferendis vero ad quibusdam nobis.</p>
</body>
</html>
`;

app.get("/", (req, res) => res.send(myHtml));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
