const { ObjectId } = require("mongodb");
const { Database } = require("../database/index");

const COLLECTION = "Users";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const login = (username, password) => {
  // console.log("username:", username);
  // console.log("password:", password);
  if (username === "admin" && password === "4f63d12aebdfbf3289ae8cc77e67b42d") {
    const user = {
      id: "1",
      name: "Administrador",
      email: "admin@wlopera.com",
    };
    return user;
  } else {
    return null;
  }
};

const getSalesbyUser = (id) => {
  if (id === "1357924680") {
    const ventas = [
      {
        id: 1,
        company: "Empresa A",
        total: 2500,
        date: "2022-07-01",
      },
      {
        id: 2,
        company: "Empresa B",
        total: 2100,
        date: "2022-07-02",
      },
      {
        id: 3,
        company: "Empresa B",
        total: 3876,
        date: "2022-07-05",
      },
    ];
    return ventas;
  } else {
    return null;
  }
};

module.exports.AuthService = {
  getAll,
  login,
  getSalesbyUser,
};
