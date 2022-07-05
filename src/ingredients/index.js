const express = require("express");
const { IngredientController } = require("./controller");

const router = express.Router();

module.exports.IngredientAPI = (app) => {
  router
    .get("/", IngredientController.getIngredients) // http"//localhost:8585/api/ingredients/
    .post("/", IngredientController.createIngredient) // http"//<url>:<port>/api/ingredients/
    .put("/:id", IngredientController.updateIngredient) // http"//<url>:<port>/api/ingredients/
    .delete("/:id", IngredientController.deleteIngredient); // http"//<url>:<port>/api/ingredients/25

  app.use("/api/ingredients", router);
};
