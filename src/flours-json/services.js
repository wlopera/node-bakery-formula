const fs = require("fs");
const { uuid } = require("uuidv4");
const path = require("path");
const rootDir = path.join(__dirname, "../");

const dataPath = path.resolve(`${rootDir}/flours.json`);
console.log(11111, rootDir);

const getAll = () => {
  const jsonData = fs.readFileSync(dataPath);
  console.log("Consultando harinas: ", JSON.parse(jsonData));
  return JSON.parse(jsonData);
};

const save = (data) => {
  try {
    console.log("Agregando harina: ", data);
    const stringifyData = JSON.stringify(data, null, 4);
    fs.writeFileSync(dataPath, stringifyData);
    console.log("Harina agregada: ", data);
    return true;
  } catch (err) {
    console.log("Error agregando harina: ", err);
    return false;
  }
};

const create = (value) => {
  console.log("Crear harina: ", value);
  try {
    let data = getAll();
    const id = uuid();
    const newValue = {
      _id: id,
      ...value,
    };
    console.log("Crear harina nueva: ", newValue);
    data.push(newValue);
    console.log("Harinas incluyedo la nueva: ", data);

    if (save(data)) {
      console.log("Harina creada: ", data);
      return id;
    }
    console.log("Harinas no agregada: ");
    return -1;
  } catch (error) {
    console.log("Error creando harina:", error);
    return -1;
  }
};

const update = (id, value) => {
  try {
    const data = getAll();
    const record = data.filter((item) => item._id === id);
    if (record.length > 0) {
      const newData = data.map((item) => {
        if (item._id === id) {
          item.label = value.label;
        }
        return item;
      });
      if (save(newData)) {
        return 1;
      }
    }
    return -1;
  } catch (error) {
    console.log("Error actualizando harina:", error);
    return -1;
  }
};

const deleteFlour = (id) => {
  try {
    const data = getAll();
    const record = data.filter((item) => item._id === id);
    if (record.length > 0) {
      const newData = data.filter((item) => item._id !== id);
      if (save(newData)) {
        return 1;
      }
    }
    return -1;
  } catch (error) {
    console.log("Error borrando harina:", error);
    return -1;
  }
};

module.exports.FlourService = {
  getAll,
  create,
  update,
  delete: deleteFlour,
};
