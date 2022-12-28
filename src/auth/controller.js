const { AuthService } = require("./services");
const { Response } = require("../common/response");

const jwt = require("jsonwebtoken");

const TOKEN_KEY = "XaTvnErxRETbVcqaLI5dqMI115eNlp5y";

// const getUsers = async (req, res) => {
//   try {
//     const users = await AuthService.getAll();
//     Response.success(res, 200, "Lista de usuarios", users);
//   } catch (error) {
//     console.error(error);
//     Response.error(res);
//   }
// };

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = AuthService.login(username, password);

    if (user) {
      const token = jwt.sign(
        {
          userId: user.id,
          username: user.username,
          rol: user.rol,
          email: user.email,
        },
        TOKEN_KEY,
        { expiresIn: 1800 } // 30 seg
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

module.exports.AuthController = {
  // getUsers,
  login,
};
