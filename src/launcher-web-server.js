const application = require('./application');
const webServer = require('./primary-ports/web-server');

application.start(webServer);
