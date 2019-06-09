const Vertical = require('../architecture/vertical');
const Feature = require('../architecture/feature');

module.exports = Vertical.of(
  'calculator',
  new Feature("multiply", request => request.getList().reduce((a, b) => a * b, 1)),
  new Feature("sum", request => request.getList().reduce((a, b) => a + b, 0))
);
