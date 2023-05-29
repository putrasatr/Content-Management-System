const createError = require('http-errors');

const err400 = (_, _, next) => {
  next(createError(404));
};

const err500 = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
};

module.exports = {
  err400,
  err500,
};
