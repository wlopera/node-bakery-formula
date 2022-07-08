const { AuthService } = require("./services");
const { Response } = require("../common/response");
const CreateError = require("http-errors");

const jwt = require("jsonwebtoken");

const TOKEN_KEY = "XaTvnErxRETbVcqaLI5dqMI115eNlp5y";

const getUsers = async (req, res) => {
  try {
    const users = await AuthService.getAll();
    Response.success(res, 200, "Lista de usuarios", users);
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = AuthService.login(username, password);

    if (user) {
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        TOKEN_KEY,
        { expiresIn: "2h" }
      );
      Response.success(res, 200, `Usuario conectado`, { ...user, token });
    } else {
      Response.error(res, {
        statusCode: 400,
        message: "Credenciales incorrectas",
      });
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const getSalesbyUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const sales = AuthService.getSalesbyUser(id);
    if (sales) {
      Response.success(res, 200, "Ventas", sales);
    } else {
      Response.error(res, {
        statusCode: 400,
        message: "No tiene ventas actualmente",
      });
    }
  } catch (error) {
    console.error(error);
    Response.error(error);
  }
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("authHeader: ", authHeader, token, authHeader.split(" "));
  if (token) {
    jwt.verify(token, TOKEN_KEY, (err, user) => {
      if (err) {
        Response.error(res, {
          statusCode: 403,
          message: "Token invalido",
        });
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

module.exports.AuthController = {
  getUsers,
  login,
  getSalesbyUser,
  verifyToken,
};
