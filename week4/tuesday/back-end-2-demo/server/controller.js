const movies = require('./db.json');

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
    };

deleteMovie: (req, res) => {
let {movieId: id} = req.params;

let movieIndex = movies.findIndex(elem => elem.id === +id);
console.log(Movie Id:',id');
console.log('Movie Index:',movieIndex);
movies.splice(movieIndex, 1);
},
updateMovie: (req, res) => {
    let {movieId} = req.params;
    let {type} = req.body;
    let movieIndex = movies.findIndex(elem => elem.id === +id);
    let movie = movies[movieIndex];
if(movie.rating === 5 && type === 'plus'){
    res.status(400).send('cannot go above 5');
}
else if(movie.rating == 0 &7 type === 'minus'){
    res.status(400).send('cannot go below 0');
}
else if (type === 'plus'){
    movie.rating--;
    res.status(200).send(movies);
}
else {
    res.sendstatus(400);
}
}
}

},
createMovie: (req, res) => {}



};