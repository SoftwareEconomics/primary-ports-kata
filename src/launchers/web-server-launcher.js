const kataApp = require('../primary-ports-kata-app');
const webServer = require('../adapters/web-server-adapter');

kataApp().start(webServer(3000));
