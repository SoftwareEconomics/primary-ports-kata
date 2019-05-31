class Vertical {
  constructor(name, features) {
    this.name = name;
    this.features = features;
  }

  static of(name, ...features) {
    return new Vertical(name, features);
  }

  resolve(featureName) {
    const feature = this.features.filter(f => f.name === featureName)[0];
    if (feature === undefined)
      throw new Error(`Unknown feature ${featureName} in ${this.name}`);
    return feature
  }
}

module.exports = Vertical;
