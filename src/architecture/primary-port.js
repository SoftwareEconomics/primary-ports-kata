/**
 * This class represents a primary port of our application.
 *
 * Primary ports drive applications by receving requests from the outside world
 * and adapting them to our application conventions.
 *
 * Adapters can inject their particular implementation through the requestHandler
 * constructor argument.
 */
class PrimaryPort {
  constructor() {
    this.onStartCallback = undefined;
    this.onSetUpCallback = undefined;
    this.onRequestCallback = undefined;
  }

  onStart(callback) {
    this.onStartCallback = callback;
    return this;
  }

  start() {
    if (this.onStartCallback !== undefined)
      this.onStartCallback(this);
    return this;
  }

  onSetUp(callback) {
    this.onSetUpCallback = callback;
    return this;
  }

  setUp(verticals) {
    if (this.onSetUpCallback !== undefined)
      this.onSetUpCallback(verticals);
    return this;
  }

  onRequest(callback) {
    this.onRequestCallback = callback;
    return this;
  };

  handleRequest(vertical, feature, data) {
    if (this.onRequestCallback === undefined)
      throw new Error("No callback has been defined to handle requests");
    return this.onRequestCallback(vertical, feature, data);
  }
}

module.exports = PrimaryPort;
