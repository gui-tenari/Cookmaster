const errorCodes = {
  invalidData: 400,
  unauthorized: 401,
  notFound: 404,
  conflictData: 409,
  serverError: 500,
};

const errorHandler = async (err, req, res, _next) => {
  const { code, message } = err;
  res.status(errorCodes[code]).json({ message });
};

module.exports = errorHandler;