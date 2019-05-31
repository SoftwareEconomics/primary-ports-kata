/**
 * This class represents a Ports&Adapters application
 */
class Application {
  constructor(verticals) {
    this.verticals = verticals;
  }

  onRequest(callback) {
    this.onRequestCallback = callback;
    return this;
  }

  start(primaryPort) {
    primaryPort
      .setUp(this.verticals)
      .onRequest(this.onRequestCallback)
      .start();
    return this;
  }
}

module.exports = Application;
