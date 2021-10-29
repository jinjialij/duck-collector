const express = require("express");
const router = express.Router();
const duck = require("../services/duck");

router.get("/", async function (req, res, next) {
  try {
    res.json(await duck.getAllDucks(req.query));
  } catch (err) {
    console.error(`Error while getting duck data `, err.message);
    next(err);
  }
});

router.post("/location", async function (req, res, next) {
  try {
    res.json(await duck.createLocation(req.body));
  } catch (err) {
    console.error(`Error while creating location`, err.message);
    next(err);
  }
});

router.post("/newduck", async function (req, res, next) {
  try {
    res.json(await duck.createDuck(req.body));
  } catch (err) {
    console.error(`Error while creating duck`, err.message);
    next(err);
  }
});

module.exports = router;
