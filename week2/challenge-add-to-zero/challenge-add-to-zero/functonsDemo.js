
let jonSnowHealth = 0;
//converting to string
//jonSnowHealth = string(jonSnowHealth);


//converting to number
//jonSnowHealth = parseInt(jonSnowHealth)


//converting to Boolean
//jonSnowHealth = Boolean(jonSnowHealth);


//converting using concatenation
//jonSnowHealth = jonSnowHealth + 'health'
//jonSnowHealth = 'health-' + jonSnowHealth


console.log(jonSnowHealth);


let theWinnerIs = 'jamie is the winner'
let newWinner = theWinnerIs.toLowerCase().replace('jamie', 'jon')
console.log(newWinner);


//includes
if(newWinner.includes('jon')){
console.log('replaced successfully')
}
else{
console.log('not replaced')
}
console.log(newWinner);


//convert to kebab case eg: jon is the winner
//let newWinnerReplace = newWinner.replaceAll(' ', '--');
//console.log(newWinnerReplace);
//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerLowerSplit = newWinnerLower.split(' ')
//let newWinnerKebab = newWinnerLowerSplit.join('-')

//let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-')
//console.log(newWinnerKebab);


//functions
function isJonAlive(){
if (jonSnowHealth > 0){
console.log("jon is alive")
}
else{
console.log("RIP jonSnow")
}
}



//create a function to launch attack on Jon

function surpriseAttack(attack) {
jonSnowHealth -= attack;
//the same
// jonSnowHealth = jonSnowHealth - attack
}
surpriseAttack(20);
surpriseAttack(10);
// let remainingPlusShield = surpriseAttack(18) + 50;
console.log(jonSnowHealth);


//```js
let jonSnowHealth = 100;

//converting to string
// jonSnowHealth =  String(jonSnowHealth)
// jonSnowHealth = toString(jonSnowHealth)

//converting to a number
// jonSnowHealth = parseInt(jonSnowHealth)

//converting to a boolean
// jonSnowHealth = Boolean(jonSnowHealth)

//converting using string coercion/concatenation
// jonSnowHealth = jonSnowHealth + ' health'

// jonSnowHealth = 'health - ' + jonSnowHealth

// console.log(jonSnowHealth)

let theWinnerIs = "Jamie is the winner";

//replace
let newWinner = theWinnerIs.toLowerCase().replace("jamie", "Jon");

//includes
if (newWinner.toLowerCase().includes("jon")) {
  console.log("replaced successfully");
} else {
  console.log("not replaced");
}

console.log(newWinner);

//convert to kebab-case eg. jon-is-the-winner
// let newWinnerReplace = newWinner.replaceAll(' ', '-')
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerLowerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerLowerSplit.join('-')

let newWinnerKebab = newWinner.toLowerCase().split(" ").join("-");

console.log(newWinnerKebab);

//functions
isJonAlive();

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log(`Jon is alive!`);
  } else {
    console.log(`RIP Jon Snow`);
  }
}

//function expression
// const isJonAlive = () => {
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//arrow-function
// const isJonAlive = function(){
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//create a function to launch attack on Jon

function surpriseAttack(attack) {
   jonSnowHealth -= attack;
   isJonAlive()
  //the same
  // jonSnowHealth = jonSnowHealth - attack
}

surpriseAttack(20);
surpriseAttack(10);
surpriseAttack(40);
surpriseAttack(40);
// let remainingPlusShield = surpriseAttack(18) + 50;

//multiple parameters can be used
function greeting(person1,person2){
    console.log(`${person1} and ${person2} are saying hello to each other`)
}

greeting('Ned','Jon')

//functions with return

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6]
    let randomIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomIndex]
}

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    
    return firstRoll * secondRoll
}

// console.log(firstRoll,secondRoll)
let mupltipliedRoll = diceMultiplier()
// console.log(mupltipliedRoll)

```