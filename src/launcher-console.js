const application = require('./application');

const console = require('./primary-ports/console');

application.start(console);
