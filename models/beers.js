const connection = require("../db-config");

const db = connection.promise();

const findMany = ({ filter: { text, minph } }) => {
  let sqlQuery = "SELECT * FROM beers";
  sqlValue = [];

  if (text && minph) {
    query += " WHERE name LIKE ? OR description LIKE ? AND ph > ?";
    sqlValue.push(`%${text}%`, `%${text}%`, minph);
  } else if (text) {
    sqlQuery += " WHERE name LIKE ? OR description LIKE ?";
    sqlValue.push(`%${text}%`, `%${text}%`);
  } else if (minph) {
    sqlQuery += "WHERE ph > ?";
    sqlValue.push(minph);
  }

  console.log(sqlQuery);
  console.log(sqlValue);

  return db.query(sqlQuery, sqlValue).then((result) => result[0]);
};

const findOne = (id) => {
  return db
    .query("SELECT * FROM beers WHERE id = ?", [id])
    .then((result) => result[0][0]); // [0] => récupère la donnée // [0] récupère que le 1er élément que l'on veut
};

const createOne = (body) => {
  return { msg: "Beer created" };
};

const updateOne = (body) => {
  return { msg: "Beer updated" };
};

// filtrer les bières

module.exports = {
  findMany,
  findOne,
  createOne,
  updateOne,
};
