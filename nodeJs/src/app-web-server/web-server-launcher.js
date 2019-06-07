const kataApp = require('../..');
const webServer = require('./web-server-adapter');

kataApp(webServer(3000)).start();
