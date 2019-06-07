const express = require('express');
const {parseInput} = require("./app/architecture/adapter-utils");
const app = express();
const {sum, multiply} = require('./app/verticals/calculator-vertical');

app.get("/cocotero/sum", (req, res) => {
  const data = parseInput(req.query.data);
  res.status(200).send(sum(data).toString());
});

app.get("/cocotero/multiply", (req, res) => {
  const data = parseInput(req.query.data);
  res.status(200).send(multiply(data).toString());
});

app.listen(8123, () => console.log(`Example app listening on port http://localhost:8123`));
