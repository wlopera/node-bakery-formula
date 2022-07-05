const { MongoClient } = require("mongodb");
const { Config } = require("../config/index");

let connection = null;
module.exports.Database = (collection) =>
  new Promise(async (res, rep) => {
    try {
      // Patron sigleton
      if (!connection) {
        const client = new MongoClient(Config.mongoUri);
        connection = await client.connect();
        console.log("Nueva conexión realizada con MongoDB Atlas");
      }
      console.log("Retornando la colección requerida");
      const db = connection.db(Config.mongoDbname);
      res(db.collection(collection));
    } catch (error) {
      rep(error);
    }
  });
