const express = require('express');
const PrimaryPort = require('../architecture/primary-port');
const {parseInput} = require('./adapter-utils');


const app = express();

const onStart = port => {
  app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));
};

const register = vertical => {
  vertical.features.forEach(feature => {
    app.get(`/${vertical.name}/${feature.name}`, (req, res) => {
      try {
        const result = vertical.handle(parseInput(req.query.data));
        res.status(200).send(result.toString());
      } catch (e) {
        console.error(e);
        res.status(500).send("Error processing request");
      }
    });
  });
};

module.exports = port => new PrimaryPort()
  .onSetUp(onSetUp)
  .register(register)
  .onStart(onStart(port));
