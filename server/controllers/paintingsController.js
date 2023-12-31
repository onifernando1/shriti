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

exports.animals = asyncHandler(async (req, res, next) => {
  const animalPaintings = await Painting.find({
    category: "animals",
  }).exec();
  res.json({ painting_list: animalPaintings });
});

exports.asian = asyncHandler(async (req, res, next) => {
  const asianPaintings = await Painting.find({
    category: "asian",
  }).exec();
  res.json({ painting_list: asianPaintings });
});

exports.other = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({
    category: "other",
  }).exec();
  res.json({ painting_list: otherPaintings });
});

exports.nudes = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({
    category: "nudes",
  }).exec();
  res.json({ painting_list: otherPaintings });
});

exports.cyclists = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({
    category: "cyclists",
  }).exec();
  res.json({ painting_list: otherPaintings });
});

exports.littlepeople = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({
    category: "littlepeople",
  }).exec();
  res.json({ painting_list: otherPaintings });
});

exports.dancers = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({
    category: "dancers",
  }).exec();
  res.json({ painting_list: otherPaintings });
});

exports.seascape = asyncHandler(async (req, res, next) => {
  const otherPaintings = await Painting.find({
    category: "seascape",
  }).exec();
  res.json({ painting_list: otherPaintings });
});
