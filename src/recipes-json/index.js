const express = require("express");
const { RecipeController } = require("./controller");
const authJwt = require("../middleware/authJwt");

const router = express.Router();

module.exports.RecipeAPI = (app) => {
  router
    .get("/", RecipeController.getRecipes) // http"//localhost:8585/api/recipes/
    .post("/", [authJwt.verifyToken], RecipeController.createRecipe) // http"//<url>:<port>/api/recipes/
    .put("/:id", [authJwt.verifyToken], RecipeController.updateRecipe) // http"//<url>:<port>/api/recipes/
    .delete("/:id", [authJwt.verifyToken], RecipeController.deleteRecipe); // http"//<url>:<port>/api/recipes/25

  app.use("/api/recipes", router);
};
