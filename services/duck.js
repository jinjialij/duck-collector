const db = require("./db");

async function getAllDucks() {
  const rows = await db.query(
    `SELECT duckform.id,record_datetime,duck_num,food,food_volume,food_unit,locationId, address, city,state,country,postcode
    FROM duckform 
    inner join location on duckform.locationId = location.id;`
  );
  if (!rows) {
    return [];
  }

  return {
    rows,
  };
}

async function createLocation(location) {
  const result = await db.query(
    `INSERT INTO location (address,city, state, country, postcode) VALUES (?,?, ?, ?, ?);`,
    [
      location.address,
      location.city,
      location.state,
      location.country,
      location.postcode,
    ]
  );

  const data = {
    message: "Error in creating location",
  };

  if (result.affectedRows) {
    data.message = "Location created successfully, but cannot get inserted id";
  }

  if (result.insertId) {
    data.insertedId = result.insertId;
  }

  return {
    data,
  };
}

async function createDuck(duck) {
  const result = await db.query(
    `INSERT INTO duckform (record_datetime, duck_num, food, food_volume, food_unit, locationId) VALUES (?, ?, ?, ?, ?, ?);`,
    [
      duck.record_datetime,
      duck.duck_num,
      duck.food,
      duck.food_volume,
      duck.food_unit,
      duck.locationId,
    ]
  );

  const data = {
    message: "Error in creating duck",
  };

  if (result.affectedRows) {
    data.message = "Duck created successfully, but cannot get inserted id";
  }

  if (result.insertId) {
    data.insertedId = result.insertId;
  }

  return {
    data,
  };
}

module.exports = {
  getAllDucks,
  createDuck,
  createLocation,
};
