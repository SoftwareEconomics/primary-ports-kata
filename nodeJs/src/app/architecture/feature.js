class Feature {
  constructor(name, handler) {
    this.name = name;
    this.handler = handler;
  }

  handle(request) {
    return this.handler(request);
  }
}

module.exports = Feature;
