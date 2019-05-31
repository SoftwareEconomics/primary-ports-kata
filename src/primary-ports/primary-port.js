class PrimaryPort {
  constructor(requestHandler) {
    this.requestHandler = requestHandler;
  }

  onRequest(callback) {
    this.requestHandler(callback);
  };
}

module.exports = PrimaryPort;
