const express = require("express");
const { IngredientController } = require("./controller");
const authJwt = require("../middleware/authJwt");

const router = express.Router();

module.exports.IngredientAPI = (app) => {
  router
    .get("/", IngredientController.getIngredients) // http"//localhost:8585/api/ingredients/
    .post("/", [authJwt.verifyToken], IngredientController.createIngredient) // http"//<url>:<port>/api/ingredients/
    .put("/:id", [authJwt.verifyToken], IngredientController.updateIngredient) // http"//<url>:<port>/api/ingredients/
    .delete(
      "/:id",
      [authJwt.verifyToken],
      IngredientController.deleteIngredient
    ); // http"//<url>:<port>/api/ingredients/25

  app.use("/api/ingredients", router);
};
