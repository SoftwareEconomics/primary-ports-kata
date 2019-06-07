class Feature {
  constructor(name, handler) {
    this.name = name;
    this.handler = handler;
  }

  handle(data) {
    return this.handler(data);
  }
}

module.exports = Feature;
