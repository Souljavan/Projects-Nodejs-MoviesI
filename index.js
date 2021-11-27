const express = require('express')
var server = express();
require('./db.js');


server.use(express.json())

server.use('/creamovies', require('./handlers/creamovies').router);
server.use('/movies', require('./handlers/movies').router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
  });