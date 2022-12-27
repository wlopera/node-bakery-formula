const CreateError = require("http-errors");

module.exports.Response = {
  success: (res, status = 200, message = "OK", body = {}) => {
    res.status(status).json({ message, body });
  },
  error: (res, error) => {
    // const { statusCode, message } = error
    //   ? error
    //   : new CreateError.InternalServerError();

    // console.log(111111111111111, statusCode, message);
    res.status(200).json({ error });
  },
};
