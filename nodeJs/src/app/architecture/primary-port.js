class PrimaryPort {
  constructor({start, register}) {
    this.onStart = start;
    this.onRegister = register;
  }

  start() {
    this.onStart();
    return this;
  }

  register(vertical) {
    this.onRegister(vertical);
  }
}

module.exports = PrimaryPort;
