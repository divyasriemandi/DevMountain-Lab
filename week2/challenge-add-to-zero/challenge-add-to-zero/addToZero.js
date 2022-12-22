
//Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let sum = 0
for (let i = 0; i < array.length; i++)  {
    for(let j = i+1; j < array.length; j++)  {
       sum = array[i] + array[j]
       if(sum === 0){
            console.log("true")
            console.log((array[i]) , (array[j]))
        }
        else
            console.log("false")
    }

}

let count = 0
while (count < array.length){
    count = count + 1
}    
