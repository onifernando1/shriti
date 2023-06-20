const Painting = require("../models/Painting");
const asyncHandler = require("express-async-handler");

// Display list of all Paintings CHANGE!
exports.painting_list = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});
