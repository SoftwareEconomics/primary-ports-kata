const application = require('../primary-ports-kata-app');
const webServer = require('../adapters/web-server');

application.start(webServer(3000));
