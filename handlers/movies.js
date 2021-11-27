const express = require('express')
const router = express.Router()
const Movies = require('../model/movies');


router.get('/', (req, res) => {
    const moviesres= Movies.find()
    console.log(moviesres)
    res.status(200).send(moviesres)

})


module.exports = {
    router: router
}