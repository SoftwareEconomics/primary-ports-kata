const system = require('./system');
const routes = require('./routes');
const adapter = require('./adapter/console');

const app = system(adapter);
app.register(routes);
app.start();
