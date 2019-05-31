// This module is the static definition of verticals and features of our application

// Store the application's verticals in an indexed map for later use.
const calculator = require('./verticals/calculator');
const greeter = require('./verticals/greeter');
const verticals = [];
[calculator, greeter].forEach(vertical => {
  verticals[vertical.name] = vertical;
});

/**
 * This function links the primary port to the defined features, which have to be qualified
 * by their vertical's name.
 */
const start = primaryPort => primaryPort.onRequest((verticalName, featureName, data) => {
  const vertical = verticals[verticalName];
  const feature = vertical.resolve(featureName);
  const output = feature.handle(data);
  return output;
});

module.exports = {start};
