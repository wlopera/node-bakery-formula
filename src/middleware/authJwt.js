const jwt = require("jsonwebtoken");

const { Response } = require("../common/response");

const TOKEN_KEY = "XaTvnErxRETbVcqaLI5dqMI115eNlp5y";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("authHeader:", authHeader);
  console.log("token:", token);

  if (token) {
    jwt.verify(token, TOKEN_KEY, (err, user) => {
      console.log(12345678, err);
      if (err) {
        Response.error(res, {
          statusCode: 403,
          message: "Token invalido",
        });
        return;
      }
      console.log("user, user");
      req.user = user;
      next();
    });
  } else {
    Response.error(res, {
      statusCode: 403,
      message: "Token requerido",
    });
  }
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
