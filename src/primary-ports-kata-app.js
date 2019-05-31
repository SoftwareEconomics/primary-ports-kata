// This module is the static definition of verticals and features of our application
const Application = require('./architecture/application');

// Store the application's verticals in an indexed map for later use.
const calculator = require('./verticals/calculator');
const greeter = require('./verticals/greeter');
const verticals = [];
[calculator, greeter].forEach(vertical => {
  verticals[vertical.name] = vertical;
});

const onStart = primaryPort => primaryPort.onRequest((verticalName, featureName, data) => {
  const vertical = verticals[verticalName];
  const feature = vertical.resolve(featureName);
  return feature.handle(data);
});

module.exports = new Application(onStart);
