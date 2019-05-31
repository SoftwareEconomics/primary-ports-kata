const system = require('./application');
const features = require('./verticals/features');
const console = require('./primary-ports/console');

const app = system(console);
app.register(features);
app.start();
