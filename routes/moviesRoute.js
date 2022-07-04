const router = require("express").Router();
const Movie = require("../models/movies");

router.get("/readMovies", (req, res, next) => {
  Movie.find()
    .then((results) => res.send(results))
    .catch((err) => next(err));
});

router.post("/createMovie", (req, res, next) => {
  const newMovie = req.body;
  Movie.create(newMovie)
    .then((result) => res.status(201).send(result))
    .catch((err) => next(err));
});

module.exports = router;
