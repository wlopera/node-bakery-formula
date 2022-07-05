const { FlourService } = require("./services");
const { Response } = require("../common/response");
// const CreateError = require("http-errors");

const getFlours = async (req, res) => {
  try {
    const flours = await FlourService.getAll();
    Response.success(res, 200, "Lista de harinas", flours);
  } catch (error) {
    console.error(error);
    Response.error(res);
  }
};

// const getProduct = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;

//     const product = await ProductsService.getById(id);
//     if (product) {
//       Response.success(res, 200, `Producto ${id}`, product);
//     } else {
//       Response.error(res, new CreateError.NotFound());
//     }
//   } catch (error) {
//     console.log(error);
//     Response.error(res);
//   }
// };

// const createProduct = async (req, res) => {
//   try {
//     const { body } = req;
//     if (!body || Object.keys(body).length === 0) {
//       Response.error(res, new CreateError.BadRequest());
//     } else {
//       const insertedId = await ProductsService.create(body);
//       Response.success(res, 201, "Producto agregado", insertedId);
//     }
//   } catch (error) {
//     debug(error);
//     Response.error(res);
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;
//     const { body } = req;
//     if (!body || Object.keys(body).length === 0) {
//       Response.error(res, new CreateError.BadRequest());
//     } else {
//       const modifiedCount = await ProductsService.update(id, body);
//       if (modifiedCount === 1) {
//         Response.success(res, 200, `Producto ${id} modificado`);
//       } else {
//         Response.error(res, new CreateError.NotFound());
//       }
//     }
//   } catch (error) {
//     debug(error);
//     Response.error(res);
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;

//     const result = await ProductsService.delete(id);
//     if (result === 1) {
//       Response.success(res, 200, `Producto ${id} borrado`);
//     } else {
//       Response.error(res, new CreateError.NotFound());
//     }
//   } catch (error) {
//     console.log(error);
//     Response.error(res);
//   }
// };

// const generateReport = (req, res) => {
//   try {
//     ProductsService.generateReport("InventaryProducts", res);
//   } catch (error) {
//     Response.error(res);
//   }
// };

module.exports.FlourController = {
  getFlours,
  // getProduct,
  // createProduct,
  // updateProduct,
  // deleteProduct,
  // generateReport,
};
