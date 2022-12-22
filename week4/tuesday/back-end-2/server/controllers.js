const houses = require('./db.json');
let globalHouseId = 4
module.exports = {
    getHouses: (req, res) => {res.status(200).send(houses);},
    deleteHouses: (req, res) => {const {id} = req.params.id;
        const houseIndex = houses.findIndex(house => house.id === id);
        houses.splice(houseIndex, 1);
        res.status(200).send(houses);
        },
    createHouses: (req, res) => {const {address, price, imageURL} = req.body;
        let newHouse = {
            id: globalHouseId,
            address,
            price: +price,
            imageURL
        };
        houses.push(newHouse);
        globalHouseId++
        res.status(200).send(houses);

    },
    updateHouses: (req, res) => {
        const {id} = req.params;
        const {type} = req.body;
    const house = houses.find(house => house.id === +id);
    console.log(house);
    if(type === 'minus' && house.price === 0){
       res.send('price cannot be less than zero')
    } else if (type === 'minus'){
        house.price -= 10000;
        res.status(200).send(houses)
;        }else if(type === 'plus'){
        house.price +=10000;
        res.status(200).send(houses);
        }
        }
        }

    
    
    
