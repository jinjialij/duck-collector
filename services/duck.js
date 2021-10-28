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

  let message = "Error in creating location";

  if (result.affectedRows) {
    message = "Location created successfully";
  }
  if (result.insertId) {
    return result.insertId;
  }

  return {
    message,
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
  let message = "Error in creating location";

  if (result.affectedRows) {
    message = "Location created successfully";
  }
  if (result.insertId) {
    return result.insertId;
  }

  return {
    message,
  };
}

module.exports = {
  getAllDucks,
  createDuck,
  createLocation,
};
