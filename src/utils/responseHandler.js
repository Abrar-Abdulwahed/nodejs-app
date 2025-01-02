const responseHandler = {
    success: (res, data = {}, message = "Success", statusCode = 200) => {
      res.status(statusCode).json({
        status: "success",
        message,
        data,
      });
    },
  
    error: (res, message = "An error occurred", statusCode = 500, errorDetails = null) => {
      res.status(statusCode).json({
        status: "error",
        message,
        error: errorDetails,
      });
    },
  
    notFound: (res, message = "Resource not found") => {
      res.status(404).json({
        status: "error",
        message,
      });
    },
  
    validationError: (res, errors = [], message = "Validation failed") => {
      res.status(400).json({
        status: "error",
        message,
        errors,
      });
    },
  
    unauthorized: (res, message = "Unauthorized access") => {
      res.status(401).json({
        status: "error",
        message,
      });
    },
  };
  
  module.exports = responseHandler;
  