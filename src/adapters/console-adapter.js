const inquirer = require("inquirer");
const PrimaryPort = require('../architecture/primary-port');
const {parseInput} = require('./adapter-utils');

const verticals = {};

const verticalQuestion = () => ({
  name: "verticalName",
  message: "Vertical name",
  type: "list",
  "choices": Object.keys(verticals)
});

const featureQuestion = () => ({
  name: "featureName",
  message: "Feature name",
  type: "list",
  "choices": ({verticalName}) => verticals[verticalName].features.map(f => f.name)
});

const dataQuestion = () => ({
  name: "rawData",
  message: "Data"
});

module.exports = new PrimaryPort({
  async start() {
    while (true) {
      const {verticalName, featureName, rawData} = await inquirer.prompt([
        verticalQuestion(),
        featureQuestion(),
        dataQuestion()
      ]);
      const vertical = verticals[verticalName];
      const feature = vertical.features.filter(f => f.name === featureName)[0];
      try {
        const result = feature.handle(parseInput(rawData));
        console.log(result);
      } catch (e) {
        console.error(e);
      }
    }
  },
  register(vertical) {
    verticals[vertical.name] = vertical;
  }
});
