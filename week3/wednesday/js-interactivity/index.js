document.querySelector('form').addEventListener('submit', addMovie);
const message = document.querySelector('#message');

function addMovie(event) {
event.prevantDefault();
}
let inputField = document.querySelector('input');

const movie = doucument.createElement('li');

const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
movieTitle.addEventListener ('click', crossofmovie);
movie.appendChild(movieTitle)
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);
const list = document.querySelector("ul");
list.appendChild(movie);


inputField.value = ''
}
function deleteMovie(event)
{
message.textContent = `Movie deleted!`
    revealMessage()
event.target.parentNode.remove();
    }
    
}



