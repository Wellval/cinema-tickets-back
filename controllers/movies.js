const Movie = require('../models/Movie')

const getMovies = (req, res) => {
    console.log('Get movies')
    Movie.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getMovie = (req, res) => {
    Movie.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const createMovie = (req, res) => {
    const movie = new Movie(req.body);
    movie.save().then((result) => {
        res.json(result)
    }).catch((e) => {
        console.log(e)
    })
}

const deleteMovie = (req, res) => {
    Movie.findById(req.params.id).deleteOne().then((result) => {
        getMovies(req, res);
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getMovies, getMovie, deleteMovie, createMovie }
