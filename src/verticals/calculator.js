const Vertical = require('./vertical');
const Feature = require('./feature');

module.exports = Vertical.of(
  'calculator',
  new Feature("multiply", ([a, b]) => a * b),
  new Feature("sum", ([a, b]) => a + b)
);
