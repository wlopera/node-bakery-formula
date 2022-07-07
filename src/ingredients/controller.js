const { IngredientService } = require("./services");
const { Response } = require("../common/response");
const CreateError = require("http-errors");

const getIngredients = async (req, res) => {
  try {
    const ingredients = await IngredientService.getAll();
    Response.success(res, 200, "Lista de ingredientes", ingredients);
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const createIngredient = async (req, res) => {
  try {
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
      Response.error(res, new CreateError.BadRequest());
    } else {
      const insertedId = await IngredientService.create(body);
      Response.success(res, 201, "Ingrediente agregado", insertedId);
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const updateIngredient = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
      Response.error(res, new CreateError.BadRequest());
    } else {
      const modifiedCount = await IngredientService.update(id, body);
      if (modifiedCount === 1) {
        Response.success(res, 200, `Ingrediente ${id} modificado`);
      } else {
        Response.error(res, new CreateError.NotFound());
      }
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const deleteIngredient = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await IngredientService.delete(id);
    if (result === 1) {
      Response.success(res, 200, `Ingrediente ${id} borrado`);
    } else {
      Response.error(res, new CreateError.NotFound());
    }
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

module.exports.IngredientController = {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
};
