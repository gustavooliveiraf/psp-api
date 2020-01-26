/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

// const logger = require('logger');
const HttpStatus = require('http-status-codes');

const internalServerError = (err, req, res, next) => {
  // logger.error(err);

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
    errors: {
      type: 'internal_error',
      message: err.message,
      stack: err.stack,
    },
    method: req.method,
    url: req.originalUrl,
  });
};

module.exports = internalServerError;
