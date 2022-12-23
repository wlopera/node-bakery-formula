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
      Response.error(
        res,
        new CreateError(422, "No se pudo agregar el ingrediente")
      );
    } else {
      const insertedId = await IngredientService.create(body);
      Response.success(res, 200, "Ingrediente agregado", insertedId);
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
        Response.success(
          res,
          200,
          `Ingrediente ${id} modificado`,
          req.body.label
        );
      } else {
        Response.error(
          res,
          new CreateError(404, `No se encontro el ingrediente [id: ${id}]`)
        );
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
      Response.error(
        res,
        new CreateError(404, `No se encontro el ingrediente [id: ${id}]`)
      );
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
