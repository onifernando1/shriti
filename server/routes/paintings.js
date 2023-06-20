const express = require("express");
const router = express.Router();
const paintingsController = require("../controllers/paintingsController");

router.get("/", paintingsController.painting_list);
router.get("/", function (req, res, next) {
  res.send("PAINTING");
});

router.get("/", function (req, res, next) {
  res.send("PAINTING");
});

router.get("/", function (req, res, next) {
  res.send("PAINTING");
});

module.exports = router;
