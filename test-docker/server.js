const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello server goooo yyyyy!!!!!");
});

app.listen(4005, () => {
  console.log("Server Listening in port 4005");
});
