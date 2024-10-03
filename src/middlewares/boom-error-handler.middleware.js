const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    let { output } = err;
    console.log(output);
    res.status(output.statusCode).json(output.payload);
  } else {
    return next(err);
  }
}

module.exports = boomErrorHandler;
