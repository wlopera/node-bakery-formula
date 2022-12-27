const express = require("express");
const { FlourController } = require("./controller");
const authJwt = require("../middleware/authJwt");

const router = express.Router();

module.exports.FlourAPI = (app) => {
  router
    .get("/", FlourController.getFlours) // http://localhost:8585/api/flours/
    .post("/", [authJwt.verifyToken], FlourController.createFlour) // http:<url>:<port>/api/flours/
    .put("/:id", [authJwt.verifyToken], FlourController.updateFlour) // http:<url>:<port>/api/flours/
    .delete("/:id", [authJwt.verifyToken], FlourController.deleteFlour); // http:<url>:<port>/api/flours/25

  app.use("/api/flours", router);
};
