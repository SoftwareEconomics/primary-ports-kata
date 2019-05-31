/**
 * This class represents a feature inside a vertical module in our application.
 *
 * Features are identified by a name and have a handler that does some computation
 * and eventually returns some output value.
 *
 * Features don't define any particular shape for their input data. Implementations
 * can choose whichever type or structure that best matches their requirements, and
 * adapters must ensure they can provide them.
 */
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
