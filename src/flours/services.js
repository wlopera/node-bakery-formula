const { ObjectId } = require("mongodb");
const { Database } = require("../database/index");
// const { ProductsUtil } = require("../util/util");

const COLLECTION = "flours";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const update = async (id, flour) => {
  const collection = await Database(COLLECTION);

  // Crear filtro de actualizacion
  const filter = { _id: ObjectId(id) };

  // Crear documento a actualizar
  const updateDoc = {
    $set: flour,
  };

  // Instrucion por si no existe el registro, se crea uno nuevo
  const options = { upsert: true };

  const result = await collection.updateOne(filter, updateDoc, options);

  return result.modifiedCount;
};

const create = async (flour) => {
  const collection = await Database(COLLECTION);
  const result = await collection.insertOne(flour);
  return result.insertedId;
};

const deleteFlour = async (id) => {
  const collection = await Database(COLLECTION);
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return result.deletedCount;
};

module.exports.FlourService = {
  getAll,
  create,
  update,
  delete: deleteFlour,
};
