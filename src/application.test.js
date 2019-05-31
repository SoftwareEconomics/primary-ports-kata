const application = require('./application');
const PrimaryPort = require('./primary-ports/primary-port');

test('The application knows how to greet people', () => {
  const testDriver = new TestApplicationDriver();
  application.start(testDriver.buildAdapter());

  const result = testDriver.send('greeter', 'greet', {name: "Luigi & Guillermo"});
  expect(result).toBe("Hi, Luigi & Guillermo!");
});

test('The application knows how to sum a pair of numbers', () => {
  const testDriver = new TestApplicationDriver();
  application.start(testDriver.buildAdapter());

  const result = testDriver.send('calculator', 'sum', [1, 2]);
  expect(result).toBe(3);
});

test('The application knows how to multiply a pair of numbers', () => {
  const testDriver = new TestApplicationDriver();
  application.start(testDriver.buildAdapter());

  const result = testDriver.send('calculator', 'multiply', [2, 3]);
  expect(result).toBe(6);
});

class TestApplicationDriver {
  constructor() {
    this.callback = null;
  }

  buildAdapter() {
    return new PrimaryPort(callback => {
      this.callback = callback;
    });
  }

  send(verticalName, featureName, data) {
    return this.callback(verticalName, featureName, data);
  }
}
