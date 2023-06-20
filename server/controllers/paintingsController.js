const Painting = require("../models/Painting");
const asyncHandler = require("express-async-handler");

// Display list of all Paintings.
exports.painting_list = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});

exports.ink = asyncHandler(async (req, res, next) => {
  const inkPaintings = await Painting.find({ category: "ink" }).exec();
  res.json({ painting_list: inkPaintings });
});

exports.abstract = asyncHandler(async (req, res, next) => {
  const abstractPaintings = await Painting.find({
    category: "abstract",
  }).exec();
  res.json({ painting_list: abstractPaintings });
});

exports.landscape = asyncHandler(async (req, res, next) => {
  const landscapePaintings = await Painting.find({
    category: "landscape",
  }).exec();
  res.json({ painting_list: landscapePaintings });
});

exports.figurative = asyncHandler(async (req, res, next) => {
  const figurativePaintings = await Painting.find({
    category: "figurative",
  }).exec();
  res.json({ painting_list: figurativePaintings });
});

exports.portrait = asyncHandler(async (req, res, next) => {
  const portraitPaintings = await Painting.find({
    category: "portrait",
  }).exec();
  res.json({ painting_list: portraitPaintings });
});

exports.other = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({ category: "other" }).exec();
  res.json({ painting_list: otherPaintings });
});
