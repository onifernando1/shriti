const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaintingSchema = new Schema({
  image: { type: String },
  title: { type: String },
  medium: { type: String },
  size: { type: String },
  category: { type: String },
  information: { type: String },
  colour: { type: String },
});

module.exports = mongoose.model("Painting", PaintingSchema);
