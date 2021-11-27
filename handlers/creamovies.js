const express = require('express')
const router = express.Router()
const Movies = require('../model/movies');


router.post('/', (req, res) => {
    


const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

Movies.insertMany(movies).then(function(){
    console.log("Data inserted")  
    res.status(201).send("Datos insertados correctamente. ")
}).catch(function(error){
    console.log(error)  
    res.status(500).send("Ha ocurrido un error al insertar los datos. ")     // Failure
});
})

module.exports = {
    router: router
}