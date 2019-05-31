const PrimaryPort = require('./primary-port');
const inquirer = require("inquirer");

module.exports = new PrimaryPort(async callback => {
  while (true) {
    const {vertical, feature, data} = await inquirer.prompt([
      {name: "vertical", message: "Vertical name"},
      {name: "feature", message: "Feature name"},
      {name: "data", message: "Data"}
    ]);
    const result = callback(vertical, feature, JSON.parse(data));
    console.log(result);
  }
});
