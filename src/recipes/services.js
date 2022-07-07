const { ObjectId } = require("mongodb");
const { Database } = require("../database/index");
// const { ProductsUtil } = require("../util/util");

const COLLECTION = "Recipes";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const update = async (id, recipe) => {
  const collection = await Database(COLLECTION);

  // Crear filtro de actualizacion
  const filter = { _id: ObjectId(id) };

  // Crear documento a actualizar
  const updateDoc = {
    $set: recipe,
  };

  // Instrucion por si no existe el registro, se crea uno nuevo
  const options = { upsert: true };

  const result = await collection.updateOne(filter, updateDoc, options);

  return result.modifiedCount;
};

const create = async (recipe) => {
  const collection = await Database(COLLECTION);
  const result = await collection.insertOne(recipe);
  return result.insertedId;
};

const deleteRecipe = async (id) => {
  const collection = await Database(COLLECTION);
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return result.deletedCount;
};

module.exports.RecipeService = {
  getAll,
  create,
  update,
  delete: deleteRecipe,
};
