const PrimaryPort = require('./primary-port');
const readlineSync = require('readline-sync');

module.exports = new PrimaryPort(callback => {
  while (true) {
    const vertical = readlineSync.question('Vertical: ');
    const feature = readlineSync.question('Feature: ');
    const data = JSON.parse(readlineSync.question('Data: '));
    const result = callback(vertical, feature, data);
    console.log(result);
  }
});
