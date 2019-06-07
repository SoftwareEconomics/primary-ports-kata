const kataApp = require('../primary-ports-kata-app');
const webServer = require('../adapters/web-server-adapter');

kataApp(webServer(3000)).start();
