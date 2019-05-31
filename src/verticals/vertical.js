/**
 * This class represents a vertical module of features in our application.
 *
 * Vertical modules are identified by a name and gather features that have
 * some domain concept in common.
 */
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
