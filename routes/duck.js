const express = require("express");
const router = express.Router();
const duck = require("../services/duck");

router.get("/", async function (req, res, next) {
  try {
    res.json(await duck.getAllDucks(req.query));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
