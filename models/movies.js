const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    min: 2,
    required: true,
  },
  description: {
    type: String,
    min: 2,
    required: true,
  },
  runtime: {
    type: Number,
    min: 5,
    max: 300,
    required: true,
  },
});

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;
