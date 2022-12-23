const fs = require("fs");
const { uuid } = require("uuidv4");
const path = require("path");

const dataPath = path.resolve("./data/flours.json");

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const update = async (id, ingredient) => {
  const collection = await Database(COLLECTION);

  // Crear filtro de actualizacion
  const filter = { _id: ObjectId(id) };

  // Crear documento a actualizar
  const updateDoc = {
    $set: ingredient,
  };

  // Instrucion por si no existe el registro, se crea uno nuevo
  const options = { upsert: true };

  const result = await collection.updateOne(filter, updateDoc, options);

  return result.modifiedCount;
};

const create = async (ingredient) => {
  const collection = await Database(COLLECTION);
  const result = await collection.insertOne(ingredient);
  return result.insertedId;
};

const deleteIngredient = async (id) => {
  const collection = await Database(COLLECTION);
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return result.deletedCount;
};

module.exports.IngredientService = {
  getAll,
  create,
  update,
  delete: deleteIngredient,
};
