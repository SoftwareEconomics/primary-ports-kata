const system = require('./system');
const features = require('./features');
const adapter = require('./adapter/console');

const app = system(adapter);
app.register(features);
app.start();
