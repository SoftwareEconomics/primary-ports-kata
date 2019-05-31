/**
 * This class represents a Ports&Adapters application
 */
class Application {
  constructor(onStart) {
    this.onStart = onStart;
  }

  start(primaryPort) {
    this.onStart(primaryPort);
  }
}

module.exports = Application;
