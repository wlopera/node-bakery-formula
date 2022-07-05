const express = require("express");
const { FlourController } = require("./controller");

const router = express.Router();

module.exports.FlourAPI = (app) => {
  router.get("/", FlourController.getFlours); //http"//localhost:8585/api/flours/
  // .get("/report", ProductsController.generateReport) //http"//localhost:3000/api/report/
  // .get("/:id", ProductsController.getProduct) //http"//localhost:3000/api/products/25
  // .post("/", ProductsController.createProduct) //http"//localhost:3000/api/products/
  // .put("/:id", ProductsController.updateProduct) //http"//localhost:3000/api/products/
  // .delete("/:id", ProductsController.deleteProduct); //http"//localhost:3000/api/products/25

  app.use("/api/flours", router);
};
