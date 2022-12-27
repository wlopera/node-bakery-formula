const express = require("express");
const cors = require("cors");
const { Config } = require("./src/config/index");

const { FlourAPI } = require("./src/flours/index");
const { IngredientAPI } = require("./src/ingredients/index");
const { RecipeAPI } = require("./src/recipes/index");
const { AuthAPI } = require("./src/auth/index");

const app = express();
app.use(cors());

// Escribir parametros en el request
app.use(express.json());

// modulos
FlourAPI(app);
IngredientAPI(app);
RecipeAPI(app);
AuthAPI(app);

// Levantar servidor
app.listen(Config.port || 8000, () =>
  console.log(`Servidor levantado en el puerto ${Config.port || 8000}`)
);
