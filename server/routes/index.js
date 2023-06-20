var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");

/* GET home page. CHANGE ALL CONTROLLERS */
router.get("/", indexController.painting_list);
router.get("/portfolio", indexController.painting_list);
router.get("/about", indexController.painting_list);
router.get("/contact", indexController.painting_list);
router.get("/news", indexController.painting_list);

module.exports = router;
