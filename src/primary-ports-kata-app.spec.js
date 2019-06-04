require('should');
const kataApp = require('./primary-ports-kata-app');
const TestApplicationDriver = require('./architecture/test-application-driver');
const PrimaryPort = require('./architecture/primary-port');


describe("The Primary Ports Kata App", () => {
  let testPort;

  beforeEach(() => {
    testPort = new PrimaryPort();
    kataApp().start(testPort);
  });

  it('Knows how to greet people', () => {
    const result = testPort.handleRequest('greeter', 'greet', "Luigi & Guillermo");
    result.should.eql("Hi, Luigi & Guillermo!");
  });

  it('Knows how to sum a pair of numbers', () => {
    const result = testPort.handleRequest('calculator', 'sum', [1, 2]);
    result.should.eql(3);
  });

  it('Knows how to multiply a pair of numbers', () => {
    const result = testPort.handleRequest('calculator', 'multiply', [2, 3]);
    result.should.eql(6);
  });
});
