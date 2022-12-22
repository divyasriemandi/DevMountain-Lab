const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;

const calculator = (num1, num2, mathOperation) => {
    if(+num1 && +num2){
        num1 = +num1;
        num2 = +num2;
        return mathOperation(num1, num2);
    } else {
        console.log('You need to send in numbers');
    }
}
//-------------------------------------------------------------
let myArr = [1,2,3,4,5,6]
const multiplyByFour = num => num * 4;

const copyArrAndChange = (arr, callBack) => {
    let results = [];

    for(let i=0; i< arr.length; i++){
        let newValue = callBack(arr[i]);
        results.push(newValue);
    }
    return results;
}

let res = copyArrAndChange(myArr, multiplyByFour);
console.log(res)
const colors = ['red', 'blue', 'yellow', 'green', 'orange'];

const mappedColors = colors.map((element, index, arr) => {
    if(element === 'red'){
        arr[index] = 'pink'
    }
});
console.log(mappedColors)