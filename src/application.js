module.exports = port => {
  return {
      features: [],
    register: (features) => {
      this.features = features;
    },
    start: () => {
      port((action, numbers) => {
        return this.features[action]({
          data: numbers.split(',')
              .map(n => parseInt(n, 10))
        });
      });
    }
  }
};