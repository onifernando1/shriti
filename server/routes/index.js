var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/about", function (req, res, next) {
  res.render();
});

router.get("/contact", function (req, res, next) {
  res.render();
});

router.get("/portfolio", function (req, res, next) {
  res.render();
});

router.get("/contact", function (req, res, next) {
  res.render();
});

router.get("/news", function (req, res, next) {
  res.render();
});

module.exports = router;
