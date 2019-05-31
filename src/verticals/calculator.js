const Vertical = require('../architecture/vertical');
const Feature = require('../architecture/feature');

module.exports = Vertical.of(
  'calculator',
  new Feature("multiply", ([a, b]) => a * b),
  new Feature("sum", ([a, b]) => a + b)
);
