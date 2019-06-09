const express = require('express');
const app = express();
const {sum, multiply} = require('../../verticals/calculator-vertical');

const parseNumbers = data => data.split(",")
  .map(s => s.trim())
  .map(s => parseInt(s, 10));

app.get("/cocotero/sum", (req, res) => {
  const numbers = parseNumbers(req.query.data);
  res.status(200).send(sum(numbers).toString());
});

app.get("/cocotero/multiply", (req, res) => {
  const numbers = parseNumbers(req.query.data);
  res.status(200).send(multiply(numbers).toString());
});

app.listen(8123, () => console.log(`Example app listening on port http://localhost:8123`));
