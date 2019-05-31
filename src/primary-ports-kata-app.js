// This module is the static definition of verticals and features of our application
const Application = require('./architecture/application');

// Store the application's verticals in an indexed map for later use.
const verticals = {};
[
  require('./verticals/calculator-vertical'),
  require('./verticals/greeter-vertical')
].forEach(vertical => verticals[vertical.name] = vertical);

module.exports = () => new Application(verticals).onRequest((verticalName, featureName, data) => {
  const vertical = verticals[verticalName];
  const feature = vertical.resolve(featureName);
  return feature.handle(data);
});
