// submit buttons
const getSubmit = document.getElementById('getSubmit');
const getParamsSubmit = document.getElementById('getParamsSubmit');
const getQuerySubmit = document.getElementById('getQuerySubmit');

// inputs
const paramsInput = document.getElementById('params-input');
const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];

// handle submits
getSubmit.addEventListener('click', () => {
    axios
        .get('http://localhost:5050/api/inventory')
        .then(res => addToView(res.data))
});

getParamsSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/inventory/${paramsInput.value}`)
        .then(res => addToView([res.data]))
});

getQuerySubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/inventory?item=${queryInput.value}`)
        .then(res => addToView(res.data))
});

// handle response
function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}



const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let inventory = [
  "greeting card",
  "wagon",
  "computer",
  "table",
  "chair",
  "milk",
  "sailboat",
  "conditioner",
  "rusty nail",
  "desk",
];

app.get("/api/inventory", (req, res) => {
  // console.log('req:',req,'-------','res:',res)
 if(req.query.item){
    // console.log(req.query.item)
    const filteredItems = inventory.filter((invItem) => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
    res.status(200).send(filteredItems)
 } else {
    res.status(200).send(inventory)
 }
});

app.get("/api/inventory/:id", (req, res) => {
  // console.log(typeof req.params.id)
  res.status(200).send(inventory[+req.params.id]);
});

app.listen(4000, () => console.log(`server jammin on port 5050`));
