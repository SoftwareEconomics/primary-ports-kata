const express = require('express');
const PrimaryPort = require('../architecture/primary-port');
const {parseInput, getVerticalAndFeatureNames} = require('./adapter-utils');

let verticalsAndFeatures = {};

const onSetUp = verticals => {
  verticalsAndFeatures = getVerticalAndFeatureNames(verticals);
};

const onStart = port => async adapter => {
  express()
    .get('/:vertical/:feature', (req, res) => {
      const vertical = req.params.vertical;
      const feature = req.params.feature;
      if (verticalsAndFeatures[vertical] === undefined || verticalsAndFeatures[vertical].indexOf(feature) === -1) {
        res.status(404).send(`${vertical}/${feature} Not found!`);
      }
      try {
        const result = adapter.handleRequest(vertical, feature, parseInput(req.query.data));
        res.status(200).send(result.toString());
      } catch (e) {
        console.error(e);
        res.status(500).send("Error processing request");
      }
    })
    .listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));
};

const register = vertical => {
  verticalsAndFeatures[vertical.name] = vertical;
};

module.exports = port => new PrimaryPort()
  .onSetUp(onSetUp)
  .register(register)
  .onStart(onStart(port));
