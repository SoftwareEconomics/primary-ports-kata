const PrimaryPort = require('./primary-port');

class TestApplicationDriver {
  constructor() {
    this.testAdapter = new PrimaryPort();
  }

  getAdapter() {
    return this.testAdapter;
  }

  sendRequest(verticalName, featureName, data) {
    return this.testAdapter.handleRequest(verticalName, featureName, data);
  }
}

module.exports = TestApplicationDriver;
