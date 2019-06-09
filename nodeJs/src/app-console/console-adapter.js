const inquirer = require("inquirer");
const PrimaryPort = require('../app/architecture/primary-port');
const Request = require('../app/architecture/request');

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

const prompt = async () => {
  const {verticalName, featureName, rawData} = await inquirer.prompt([
    verticalQuestion(),
    featureQuestion(),
    dataQuestion()
  ]);
  const vertical = verticals[verticalName];
  const feature = vertical.features.filter(f => f.name === featureName)[0];
  try {
    const result = feature.handle(new Request(rawData));
    console.log(result);
    prompt();
  } catch (e) {
    console.error(e);
  }
};

module.exports = new PrimaryPort({
  start() {
    prompt();
  },
  register(vertical) {
    verticals[vertical.name] = vertical;
  }
});
