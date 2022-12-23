const fs = require("fs");
const { uuid } = require("uuidv4");

const path = require("path");
const dataPath = path.resolve("./data/flours.json");

const getAll = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const save = (data) => {
  try {
    const stringifyData = JSON.stringify(data, null, 4);
    fs.writeFileSync(dataPath, stringifyData);

    return true;
  } catch (err) {
    return false;
  }
};

const create = (value) => {
  try {
    let data = getAll();
    const id = uuid();
    const newValue = {
      _id: id,
      ...value,
    };
    data.push(newValue);
    if (save(data)) {
      return id;
    }
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
