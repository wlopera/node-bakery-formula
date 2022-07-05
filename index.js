const express = require("express");
const { Config } = require("./src/config/index");

const { FlourAPI } = require("./src/flours/index");
const { IngredientAPI } = require("./src/ingredients/index");

const app = express();

// Escribir parametros en el request
app.use(express.json());

// modulos
FlourAPI(app);
IngredientAPI(app);

// Levantar servidor
app.listen(Config.port, () =>
  console.log(`Servidor levantado en el puerto ${Config.port}`)
);
