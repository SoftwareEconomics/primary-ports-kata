// This module is the static definition of verticals and features of our application
const Application = require('./architecture/application');
const calculatorVertical = require('./verticals/calculator-vertical');
const greeterVertical = require('./verticals/greeter-vertical');

module.exports = primaryPort => new Application(primaryPort)
  .register(calculatorVertical)
  .register(greeterVertical);
