const PrimaryPort = require('./primary-port');
const express = require('express');
const exp = express();
const port = 3000;

module.exports = new PrimaryPort(callback => {
  exp.get('/:vertical/:feature', (req, res) => {
    const vertical = req.param('vertical');
    const feature = req.param('feature');
    const data = JSON.parse(req.query.data);
    const result = callback(vertical, feature, data);
    res.send(200, result);
  });

  exp.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
