const express = require("express");
const { FlourController } = require("./controller");

const router = express.Router();

module.exports.FlourAPI = (app) => {
  router
    .get("/", FlourController.getFlours) // http"//localhost:8585/api/flours/
    .post("/", FlourController.createFlour) // http"//<url>:<port>/api/flours/
    .put("/:id", FlourController.updateFlour) // http"//<url>:<port>/api/flours/
    .delete("/:id", FlourController.deleteFlour); // http"//<url>:<port>/api/flours/25

  app.use("/api/flours", router);
};
