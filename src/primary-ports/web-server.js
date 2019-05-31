const express = require('express');
const exp = express();
const port = 3000;

module.exports = (callback) => {
  exp.get('/action/:action', (req, res) => {
    const action = req.param('action');
    const numbers = req.query.numbers;
    const result = callback(action, numbers);
    res.send(result.toString());
  });

  exp.listen(port, () => console.log(`Example app listening on port ${port}!`));
};