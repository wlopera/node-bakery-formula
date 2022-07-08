const express = require("express");
const { AuthController } = require("./controller");

const router = express.Router();

module.exports.AuthAPI = (app) => {
  router
    .get("/", AuthController.getUsers) // http"//localhost:8585/api/users/
    .post("/login", AuthController.login) // http"//<url>:<port>/api/user/login/
    .get(
      "/:id/sales",
      AuthController.verifyToken,
      AuthController.getSalesbyUser
    ); // http"//localhost:8585/api/users/123456/sales

  app.use("/api/users", router);
};
