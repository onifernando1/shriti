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
router.get("/animals", paintingsController.animals);
router.get("/asian", paintingsController.asian);
router.get("/nudes", paintingsController.nudes);
router.get("/cyclists", paintingsController.cyclists);
router.get("/littlepeople", paintingsController.littlepeople);
router.get("/dancers", paintingsController.dancers);
router.get("/seascape", paintingsController.seascape);

module.exports = router;
