module.exports = port => {
  return {
    routes: [],
    register: (routes) => {
      this.routes = routes;
    },
    start: () => {
      port((action, numbers) => {
        return this.routes[action]({
          data: numbers.split(',')
              .map(n => parseInt(n, 10))
        });
      });
    }
  }
};