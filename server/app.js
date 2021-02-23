const express = require("express");
const pino = require("express-pino-logger")();
// const bodyParser = require("body-parser"); older import for urlencoded as commented below

const app = express();

app.use(express.urlencoded({ extended: false })); // app.use(bodyParser.urlencoded({ extended: false })); is the same but was used in older versions of express

app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.json([
    {
      id: 1,
      username: "samsepi0l",
    },
    {
      id: 2,
      username: "D0loresH4ze",
    },
  ]);
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
