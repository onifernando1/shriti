const express = require("express");
const router = express.Router();
const paintingsController = require("../controllers/paintingsController");

//CHANGE NAMES!

router.get("/", paintingsController.painting_list);
router.get("/ink", paintingsController.ink);
router.get("/abstract", paintingsController.abstract);
router.get("/landscape", paintingsController.landscape);
router.get("/figurative", paintingsController.figurative);
router.get("/portrait", paintingsController.portrait);
router.get("/other", paintingsController.other);

module.exports = router;
