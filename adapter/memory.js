module.exports = () => {
  return {
    callback: null,
    register: callback => {
      this.callback = callback;
    },
    send: (action, numbers) => this.callback(action, numbers)
  };
};