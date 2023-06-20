const express = require("express");
const router = express.Router();
const paintingsController = require("../controllers/paintingsController");

//CHANGE NAMES!

router.get("/", paintingsController.painting_list);
router.get("/ink", paintingsController.ink);
router.get("/abstract", paintingsController.painting_list);
router.get("/landscape", paintingsController.painting_list);
router.get("/figurative", paintingsController.painting_list);
router.get("/portrait", paintingsController.painting_list);
router.get("/other", paintingsController.painting_list);

module.exports = router;
