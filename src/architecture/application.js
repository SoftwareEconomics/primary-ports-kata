/**
 * This class represents a Ports&Adapters application
 */
class Application {
  constructor(primaryPort) {
    this.primaryPort = primaryPort;
    this.primaryPort.onRequest((verticalName, featureName, data) => {
      const vertical = verticals[verticalName];
      const feature = vertical.resolve(featureName);
      return feature.handle(data);
    });
  }

  register(vertical) {
    this.primaryPort.register(vertical);
  }

  start() {
    this.primaryPort.start();
      // .onRequest((verticalName, featureName, data) => {
      //   const vertical = verticals[verticalName];
      //   const feature = vertical.resolve(featureName);
      //   return feature.handle(data);
      // })
      //.start();
    return this;
  }
}

module.exports = Application;
