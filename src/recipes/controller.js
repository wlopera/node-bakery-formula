const { RecipeService } = require("./services");
const { Response } = require("../common/response");
const CreateError = require("http-errors");

const getRecipes = async (req, res) => {
  try {
    const recipes = await RecipeService.getAll();
    Response.success(res, 200, "Lista de recetas", recipes);
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const createRecipe = async (req, res) => {
  try {
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
      Response.error(res, new CreateError.BadRequest());
    } else {
      const insertedId = await RecipeService.create(body);
      Response.success(res, 201, "Receta agregada", insertedId);
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
      Response.error(res, new CreateError.BadRequest());
    } else {
      const modifiedCount = await RecipeService.update(id, body);
      if (modifiedCount === 1) {
        Response.success(res, 200, `Receta ${id} modificada`);
      } else {
        Response.error(res, new CreateError.NotFound());
      }
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await RecipeService.delete(id);
    if (result === 1) {
      Response.success(res, 200, `Receta ${id} borrada`);
    } else {
      Response.error(res, new CreateError.NotFound());
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

module.exports.RecipeController = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
