const { Router } = require("express");
const router = Router();
const _ = require("underscore");

// GET
const movies = require("./sample.json");
router.get("/", (req, res) => {
  res.json(movies);
});

// POST
router.post("/", (req, res) => {
  const { Tittle, Director, Year, Rate } = req.body;

  if (Tittle && Director && Year && Rate) {
    const id = movies.length;
    const newMovie = { ...req.body, id };
    console.log(newMovie);
    movies.push(newMovie);
    res.json(movies); // recibimos el archivo actualizado con el ultimo post
  } else {
    res.status(500).json({ erro: "There was an error" });
  }
});

// PUT
router.put("/:id", (req, res) => {
  const { Tittle, Director, Year, Rate } = req.body;
  const { id } = req.params;
  if (Tittle && Director && Year && Rate) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {
        movie.Tittle = Tittle;
        movie.Director = Director;
        movie.Year = Year;
        movie.Rate = Rate;
      }
    });

    res.json(movies);
  } else { res.status(500).json({erro:"There was an error"})
  }
});

// DELET
// install underscore
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  _.each(movies, (movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });

  res.send(movies);
});

module.exports = router;
