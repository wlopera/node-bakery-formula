const express = require("express");
const { AuthController } = require("./controller");

const router = express.Router();

module.exports.AuthAPI = (app) => {
  router
    .get("/", AuthController.getUsers) // http"//localhost:8585/api/users/
    .post("/login", AuthController.login); // http"//<url>:<port>/api/user/login/

  app.use("/api/users", router);
};
