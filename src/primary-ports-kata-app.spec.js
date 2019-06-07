require('should');
const kataApp = require('./primary-ports-kata-app');
const TestApplicationDriver = require('./architecture/test-application-driver');

describe("The Primary Ports Kata App", () => {
  let testDriver;

  beforeEach(() => {
    testDriver = new TestApplicationDriver();
    kataApp(testDriver.getAdapter()).start();
  });

  it('Knows how to greet people', () => {
    const result = testDriver.sendRequest('greeter', 'greet', "Luigi & Guillermo");
    result.should.eql("Hi, Luigi & Guillermo!");
  });

  it('Knows how to sum a pair of numbers', () => {
    const result = testDriver.sendRequest('calculator', 'sum', [1, 2]);
    result.should.eql(3);
  });

  it('Knows how to multiply a pair of numbers', () => {
    const result = testDriver.sendRequest('calculator', 'multiply', [2, 3]);
    result.should.eql(6);
  });
});
