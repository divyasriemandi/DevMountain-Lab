let {dessert: favDessert, entree: favEntree, drink: favDrink} = meal;

console.log(`This is the desert: ${favDessert}`);
console.log(`This is the entree: ${favEntree}`);
console.log(`This is the drink: ${favDrink}`);

console.log(meal)
Vinson Aiono — Today at 11:45 AM
let meal = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    dessert: ['Churros', 'lava Cake', 'ice cream'],
    drink: 'Coke',
};

let meal2 = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    dessert: ['ice cream'],
    drink: 'Coke',
};
let meal3 = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    drink: 'Coke',
};
let person = {
    firstName: 'Chandler',
    lastName: 'Bong',
    age: 34,
};

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }
  let person = {
    firstName: 'Chandler',
    lastName: 'Bong',
    age: 34,
};

let fName = 'firstName';

// console.log('Dot Notation', person.firstName);
// console.log('Bracket Notation: ', person['firstName']);
// console.log('Bracket Notation: ', person[fName]);

let meal = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    dessert: ['Churros', 'lava Cake', 'ice cream'],
    drink: 'Coke',
};

let meal2 = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    dessert: ['ice cream'],
    drink: 'Coke',
};
let meal3 = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    drink: 'Coke',
};

// let dessert = meal.dessert;
// let entree = meal.entree;
// let drink = meal.drink;

// let meal2 = {
//     appetizer: meal['appetizer'],
//     dessert,
//     entree,
//     drink
// }

let {dessert: favDessert, entree: favEntree, drink: favDrink} = meal;

console.log(`This is the desert: ${favDessert}`);
console.log(`This is the entree: ${favEntree}`);
console.log(`This is the drink: ${favDrink}`);

console.log(meal);

function giveMeDessert(obj) {
    if (obj['dessert']) {
        return obj['dessert'];
    } else {
        return 'no dessert';
    }
}
// console.log('Dessert: ', giveMeDessert(meal));
// console.log('Dessert: ', giveMeDessert(meal2));
// console.log('Dessert: ', giveMeDessert(meal3));

// for (let attribute in person) {
//     console.log(`This is the key: ${attribute}`);
// }
// for (let attribute in person) {
//     console.log(`This is the value: ${person[attribute]}`);
// }

person.job = 'Engineer';
person['pets'] = ['dog', 'dragon'];

// console.log(person);

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo'],
};
// console.log(teams)
delete teams.teamFour;
// console.log(teams)
 
class Car {
    constructor(make, model, color){
        this.make = make,
        this.model = model,
        this.color = color,
        this.miles = 0
    }

    drive(miles){
        this.miles += miles;
        console.log(`${this.make} increased miles by ${miles},  \ncurrent miles: ${this.miles} `)
    }
}

let myCar = new Car('Tesla', 'Model Y', 'black');
let yourCar = new Car('Toyota', 'Highlander', 'blue');

myCar.drive(30)
yourCar.drive(45)
myCar.drive(10)

console.log(myCar);
console.log(yourCar);

// console.log(myCar['make']);
// console.log(myCar.make);

class Truck extends Car {
    constructor(make, model, color, payload){
        super(make, model, color) // all the properties from the Parent class - Car

        this.payload = payload;
    }
    tow(weight){
        if(weight > this.payload){
            console.log('Max payload exceeded')
        } else {
            console.log('Towing successful');
        }
    }
}

let truck = new Truck('Ford', 'F450', 'black', 100);

console.log(truck);
truck.drive(15);
truck.tow(99)
truck.tow(101)