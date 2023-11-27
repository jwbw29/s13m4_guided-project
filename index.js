const express = require("express");

const server = express();

server.use(express.json());

server.get("/hello", (req, res) => {
  res.json("hello there");
});

const port = process.env.PORT || 9000; //not a thing in our machine, but is in heroku

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
