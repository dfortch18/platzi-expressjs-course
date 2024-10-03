const logErrors = require("./log-error.middleware");
const errorHandler = require("./error-handler.middleware");
const boomErrorHandler = require("./boom-error-handler.middleware");

module.exports = { logErrors, errorHandler, boomErrorHandler };
