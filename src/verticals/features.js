module.exports = {
  mul: (query) => {
    return query.data[0] * query.data[1];
  },
  sum: (query) => {
    return query.data[0] + query.data[1];
  }
};