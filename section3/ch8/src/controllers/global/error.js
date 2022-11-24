export const errRouter = (err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message || "Internal Server Error",
    ...err,
  };

  res.status(error.status).json(error);
};
