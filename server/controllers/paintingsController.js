const Painting = require("../models/Painting");
const asyncHandler = require("express-async-handler");

// Display list of all Paintings.
exports.painting_list = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});

exports.ink = asyncHandler(async (req, res, next) => {
  const inkPaintings = await Painting.find({ category: "ink" }).exec();
  res.json({ inkPaintings: inkPaintings });
});

exports.abstract = asyncHandler(async (req, res, next) => {
  const inkPaintings = await Painting.find({ category: "ink" }).exec();
  res.json({ inkPaintings: inkPaintings });
});

exports.landscape = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});

exports.figurative = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});

exports.portrait = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});

exports.other = asyncHandler(async (req, res, next) => {
  const allPaintings = await Painting.find({}).exec();
  res.json({ painting_list: allPaintings });
});
