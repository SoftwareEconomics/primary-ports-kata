require('should');
const kataApp = require('./primary-ports-kata-app');
const PrimaryPort = require('./architecture/primary-port');

describe("The Primary Ports Kata App", () => {

  it('Knows how to greet people', () => {
    const testDriver = new TestApplicationDriver();
    kataApp.start(testDriver.buildAdapter());

    const result = testDriver.send('greeter', 'greet', {name: "Luigi & Guillermo"});
    result.should.eql("Hi, Luigi & Guillermo!");
  });

  it('Knows how to sum a pair of numbers', () => {
    const testDriver = new TestApplicationDriver();
    kataApp.start(testDriver.buildAdapter());

    const result = testDriver.send('calculator', 'sum', [1, 2]);
    result.should.eql(3);
  });

  it('Knows how to multiply a pair of numbers', () => {
    const testDriver = new TestApplicationDriver();
    kataApp.start(testDriver.buildAdapter());

    const result = testDriver.send('calculator', 'multiply', [2, 3]);
    result.should.eql(6);
  });
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
