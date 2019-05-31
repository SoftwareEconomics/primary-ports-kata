const PrimaryPort = require('../architecture/primary-port');
const exp = require('express')();

module.exports = port => new PrimaryPort(callback => {
  exp.get('/:vertical/:feature', (req, res) => {
    const vertical = req.param('vertical');
    const feature = req.param('feature');
    const data = JSON.parse(req.query.data);
    const result = callback(vertical, feature, data);
    res.send(200, result);
  });

  exp.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));
});
