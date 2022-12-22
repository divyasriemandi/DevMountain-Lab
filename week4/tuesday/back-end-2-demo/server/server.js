const express = require('express');
const cors = require('cors');

const {getMovies} = require('./controller.js');


const  app = express();
app.use(express.json());
app.use(cors())



app.get('/api/movies', getMovies);
app.delete('/api/movies/:movieId', deleteMovie);
app.put('/api/movies/:movieId', updateMovie)

app.delete('/api/movies/:id', deleteMovie)



app.listen(4004, () => console.log('listeninng on port 4004...'));


