const system = require('./system');
const features = require('./features');
const adapter = require('./adapter/web');

/*

 Responds to:
 - http://localhost:3000/action/sum/?numbers=2,5
 - http://localhost:3000/action/mul/?numbers=2,5

 */

const app = system(adapter);
app.register(features);
app.start();