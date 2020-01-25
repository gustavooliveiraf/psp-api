const HttpStatus = require('http-status-codes');

const internalServerError = (req, res, err) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
  errors: {
    message: err.message,
    type: 'internal_error',
  },
  method: req.method,
  url: req.originalUrl,
});

module.exports = internalServerError;
