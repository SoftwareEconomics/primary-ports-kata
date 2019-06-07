class Vertical {
  constructor(name, features) {
    this.name = name;
    this.features = features;
  }

  static of(name, ...features) {
    return new Vertical(name, features);
  }
}

module.exports = Vertical;
