class Application {
  constructor(primaryPort) {
    this.primaryPort = primaryPort;
  }

  register(vertical) {
    this.primaryPort.register(vertical);
    return this;
  }

  start() {
    this.primaryPort.start();
    return this;
  }
}

module.exports = Application;
