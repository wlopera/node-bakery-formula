const express = require("express");
const { RecipeController } = require("./controller");

const router = express.Router();

module.exports.RecipeAPI = (app) => {
  router
    .get("/", RecipeController.getRecipes) // http"//localhost:8585/api/recipes/
    .post("/", RecipeController.createRecipe) // http"//<url>:<port>/api/recipes/
    .put("/:id", RecipeController.updateRecipe) // http"//<url>:<port>/api/recipes/
    .delete("/:id", RecipeController.deleteRecipe); // http"//<url>:<port>/api/recipes/25

  app.use("/api/recipes", router);
};
