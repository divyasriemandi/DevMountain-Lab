// endpoint : https://swapi.dev/api/people
let baseURL = 'https://swapi.dev/api';

let characterSection = document.querySelector('.characters');
let btn = document.querySelector('button');

// btn.addEventListener('click', getAllCharacters);

console.log('Callbaclk',getCharacters);

let charactersArray; // Array of characters

function getResults(){
    axios.get(`${baseURL}/people`).then(data => {
        charactersArray = data.data.results
        buildCards(data.data.results)
    }).catch(err => console.log(err))
}

function buildCards(results) {
    let cards = ``;
    for (let i = 0; i < results.length; i++) {
        cards += `
                    <div class="card">
                        <p class="name">Name: ${results[i].name}</p>
                        <p class="eyecolor">Eye Color: ${results[i].eye_color}</p>
                        <p class="birthyear">Birth Year: ${results[i].birth_year}</p>
                        <button onclick="deleteCharacter('${results[i].name}')">delete</button>
                    </div>
                `;
        // console.log(cards);
    }
    characterSection.innerHTML = cards;
}

function deleteCharacter(name){
    console.log(name)
    let index = charactersArray.findIndex(el => el.name === name)
    console.log(index)
    charactersArray.splice(index, 1)
    buildCards(charactersArray)
}








//playing code


let baseURL = 'https://swapi.dev/api';

let characterSection = document.querySelector('.characters');
let btn = document.querySelector('button');

let charactersArray; // will be local storage of characters array after axios request is made

btn.addEventListener('click', () => buildCards(charactersArray));

let onLoad = async () => { // this onLoad function is invoked at the end of the file
    let {data} = await axios.get(`${baseURL}/people`); // api request to get characters
    charactersArray = data.results; // store results in charactersArray variable declared above
};

function buildCards(results) {
    let cards = ``;
    for (let i = 0; i < results.length; i++) {
        cards += `
                    <div class="card">
                        <p class="name">Name: ${results[i].name}</p>
                        <p class="eyecolor">Eye Color: ${results[i].eye_color}</p>
                        <p class="birthyear">Birth Year: ${results[i].birth_year}</p>
                        <button onclick="deleteCharacter('${results[i].name}')">delete</button>
                    </div>
                `;
    }
    characterSection.innerHTML = cards;
}

function deleteCharacter(name) {
    let index = charactersArray.findIndex((el) => el.name === name);
    charactersArray.splice(index, 1);
    buildCards(charactersArray);
}

onLoad();