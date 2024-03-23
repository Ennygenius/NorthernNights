const errorHandler = (err, req, res, next) => {
  const errMsg = err.message || "something went wrong";
  const errStatus = err.status || 500;
  const errStack = process.env.NODE_ENV === "development" ? err.stack : {};

  res.status(errStatus).json({
    success: false,
    message: errMsg,
    statusCode: errStatus,
    stackTrace: errStack,
  });
};

export default errorHandler;
