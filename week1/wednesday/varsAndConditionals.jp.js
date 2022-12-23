let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has a better attack than Jamie Lannister');
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has a better attack than Jon Snow');
} else {
    console.log('Its a tie');
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jon snow gets attacked by Jamie
if (jonSnowHealth < jamieLannisterAttack) {
    console.log('Jon Snow has been slain!!!');
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}
//One of the town’s people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon’s health by 50pts. However, Jon’s health cannot exceed 100. Using an if else statement, raise Jon’s health to the appropriate level.

let healthKit = 50;

if (jonSnowHealth + healthKit > 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += healthKit;
}

// if(jonSnowHealth >= 50){
//     jonSnowHealth = 100;
// } else {
//     jonSnowHealth += 50;
// }
//Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon’s head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

let coinLandsHeads = false;

if (coinLandsHeads === true) {
    console.log('They conintue to fight and Jamie takes Jons head');
} else {
    console.log('Jon is allowed to run away');
}

//Let’s see how this battle will play out if it continues. Create a for loop that will have Jamie attack Jon 5 times. Console log Jon Snow’s health after each attack.

for(let i=1; i<=5; i++){
    jonSnowHealth -= jamieLannisterAttack;
    if(jonSnowHealth <= 0){
        jonSnowHealth = 0;
    }
    console.log(`Jon Snows health is ${jonSnowHealth}`)

    if(jonSnowHealth <= 0){
        console.log('Jon Snow has been Slain')
        break;
    }
}

console.log('Made some changes');