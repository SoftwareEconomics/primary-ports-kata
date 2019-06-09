const express = require('express');
const app = express();
const {greet} = require('../greeter-vertical');

app.get("/cocotero/greet", (req, res) => {
  res.status(200).send(greet(req.query.data).toString());
});

app.listen(8123, () => console.log(`Example app listening on port http://localhost:8123`));
