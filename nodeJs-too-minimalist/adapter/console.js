const readlineSync = require('readline-sync');

module.exports = (callback) => {
  while (true) {
    const action = readlineSync.question('Action: ');
    const numbers = readlineSync.question('Numbers: ');
    const result = callback(action, numbers);
    console.log(result);
  }
};