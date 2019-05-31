const Vertical = require('./vertical');
const Feature = require('./feature');

module.exports = Vertical.of(
  'greeter',
  new Feature("greet", ({name}) => `Hi, ${name}!`)
);
