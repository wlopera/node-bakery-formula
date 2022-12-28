const { Database } = require("../database/index");

const COLLECTION = "Users";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const login = (username, password) => {
  if (username === "admin" && password === "4f63d12aebdfbf3289ae8cc77e67b42d") {
    const user = {
      id: 12345,
      username: "Administrador",
      rol: "admin",
      email: "admin@wlopera.com",
    };

    return user;
  } else {
    return null;
  }
};

module.exports.AuthService = {
  // getAll,
  login,
};
