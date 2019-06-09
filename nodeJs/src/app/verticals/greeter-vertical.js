const Vertical = require('../architecture/vertical');
const Feature = require('../architecture/feature');

module.exports = Vertical.of(
  'greeter',
  new Feature("greet", request => `Hi, ${request.get()}!`)
);
