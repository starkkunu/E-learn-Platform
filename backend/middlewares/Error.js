const ErrorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  console.log(err);

  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorMiddleware;
