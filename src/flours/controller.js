const { FlourService } = require("./services");
const { Response } = require("../common/response");
const CreateError = require("http-errors");

const getFlours = async (req, res) => {
  try {
    const flours = await FlourService.getAll();
    Response.success(res, 200, "Lista de harinas", flours);
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

const createFlour = async (req, res) => {
  try {
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
      Response.error(res, new CreateError.BadRequest());
    } else {
      const insertedId = await FlourService.create(body);
      Response.success(res, 200, "Harina agregada", insertedId);
    }
  } catch (error) {
    console.log(error);
    Response.error(res);
  }
};

const updateFlour = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
      Response.error(res, new CreateError.BadRequest());
    } else {
      const modifiedCount = await FlourService.update(id, body);
      if (modifiedCount === 1) {
        Response.success(res, 200, `Harina ${id} modificada`);
      } else {
        Response.error(res, new CreateError.NotFound());
      }
    }
  } catch (error) {
    console.log(error);
    Response.error(res);
  }
};

const deleteFlour = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await FlourService.delete(id);
    if (result === 1) {
      Response.success(res, 200, `Harina ${id} borrada`);
    } else {
      Response.error(res, new CreateError.NotFound());
    }
  } catch (error) {
    console.log(error);
    Response.error(res);
  }
};

module.exports.FlourController = {
  getFlours,
  createFlour,
  updateFlour,
  deleteFlour,
};
