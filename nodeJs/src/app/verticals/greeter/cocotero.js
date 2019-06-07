const express = require('express');
const {parseInput} = require("../../architecture/adapter-utils");
const app = express();
const {greet} = require('../greeter-vertical');

app.get("/cocotero/greet", (req, res) => {
  const data = parseInput(req.query.data);
  res.status(200).send(greet(data).toString());
});

app.listen(8123, () => console.log(`Example app listening on port http://localhost:8123`));
