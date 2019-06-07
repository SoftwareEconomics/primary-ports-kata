const express = require('express');
const PrimaryPort = require('../app/architecture/primary-port');
const {parseInput} = require('../app/architecture/adapter-utils');

const verticals = {};

module.exports = portNumber => {
  const app = express();
  return new PrimaryPort({
    async start() {
      app.get('/:verticalName/:featureName', (req, res) => {
        const vertical = verticals[req.params.verticalName];
        const feature = vertical.features.filter(f => f.name === req.params.featureName)[0];
        try {
          const result = feature.handle(parseInput(req.query.data));
          res.status(200).send(result.toString());
        } catch (e) {
          console.error(e);
          res.status(500).send("Error processing request");
        }
      });
      app.listen(portNumber, () => console.log(`Example app listening on port http://localhost:${portNumber}!`));
    },
    register(vertical) {
      verticals[vertical.name] = vertical;
    }
  });
};
