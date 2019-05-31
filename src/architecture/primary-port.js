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
  constructor(requestHandler) {
    this.requestHandler = requestHandler;
  }

  onRequest(callback) {
    this.requestHandler(callback);
  };
}

module.exports = PrimaryPort;
