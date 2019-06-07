const Vertical = require('../architecture/vertical');
const Feature = require('../architecture/feature');

module.exports = Vertical.of(
  'greeter',
  new Feature("greet", name => `Hi, ${name}!`)
);
