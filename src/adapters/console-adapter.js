const inquirer = require("inquirer");
const PrimaryPort = require('../architecture/primary-port');
const {parseInput, getVerticalAndFeatureNames} = require('./adapter-utils');

let verticalsAndFeatures = {};

const onSetUp = verticals => {
  verticalsAndFeatures = getVerticalAndFeatureNames(verticals);
};

const verticalQuestion = () => ({
  name: "vertical",
  message: "Vertical name",
  type: "list",
  "choices": Object.keys(verticalsAndFeatures)
});

const featureQuestion = () => ({
  name: "feature",
  message: "Feature name",
  type: "list",
  "choices": ({vertical}) => verticalsAndFeatures[vertical]
});

const dataQuestion = () => ({
  name: "rawData",
  message: "Data"
});

const onStart = async adapter => {
  while (true) {
    const {vertical, feature, rawData} = await inquirer.prompt([
      verticalQuestion(),
      featureQuestion(),
      dataQuestion()
    ]);
    try {
      const result = adapter.handleRequest(vertical, feature, parseInput(rawData));
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }
};

module.exports = new PrimaryPort()
  .onSetUp(onSetUp)
  .onStart(onStart);
