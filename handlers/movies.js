const express = require('express')
const router = express.Router()
const Movies = require('../model/movies');


router.get('/', (req, res) => {
    Movies.find()
        .then((movies) => {
            return res.json(movies);
        })
        .catch((error) => {
            const errorOcurrido = new Error();
            return next(errorOcurrido);
        })
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    Movies.findById(id)
        .then(movies => {
            if (!movies) {
                return res.status(404).json('Pelicula no encontrado');
            }
            return res.json(movies)
        })
        .catch((error) => {
            const errorOcurrido = new Error();
            return next(errorOcurrido);
        })
});

router.get('/titulo/:title', (req, res) => {
    const title = req.params.name;
    Movies.find({ 'title': title })
        .then(movies => {
            if (!movies) {
                return res.status(404).json('Pelicula no encontrado');
            }
            return res.json(movies)
        })
        .catch((error) => {
            const errorOcurrido = new Error();
            return next(errorOcurrido);
        })
});

router.get('/genero/:genre', (req, res) => {
    const genre = req.params.genre;
    Movies.find({ 'genre': genre })
        .then(movies => {
            if (!movies) {
                return res.status(404).json('Pelicula no encontrado');
            }
            return res.json(movies)
        })
        .catch((error) => {
            const errorOcurrido = new Error();
            return next(errorOcurrido);
        })
});

router.get('/fecha/:ano', (req, res) => {
    const ano = req.params.ano;
    Movies.find().where({'year': { $gt: 2010 }})
        .then(movies => {
            if (!movies) {
                return res.status(404).json('Pelicula no encontrado');
            }
            return res.json(movies)
        })
        .catch((error) => {
            const errorOcurrido = new Error();
            return next(errorOcurrido);
        })
});





module.exports = {
    router: router
}