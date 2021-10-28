const db = require("./db");

async function getAllDucks(page = 1) {
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

module.exports = {
  getAllDucks,
};
