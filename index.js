const express = require('express')
var server = express();
const PORT = 3000;

require('./db/db');


server.use(express.json())

server.use('/movies', require('./handlers/movies').router);

server.use('*', (req, res) => {
  res.status(404).json('Not found')
});


server.listen(PORT, () => {
    console.log(`Servidor arrancado en el puerto: ${PORT}`);
  });