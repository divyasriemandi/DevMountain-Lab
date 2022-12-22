//Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

//For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

//printDigits(1)
// 1

//printDigits(314)
// 4
// 1
// 3

//printDigits(12)
// 2
// 1
let num = 4562;
function printDigits(num){

    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = (num / 10);
    }
    return rev_num;
}
console.log(printDigits);



const decoder = code => {
    let splitString = code.split('')
    let wordToReturn = ''
    // console.log(splitString)
    for(let i =0;i < splitString.length;i++ ){
      if(!isNaN(+splitString[i])){
        i += +splitString[i]
      }
      else {
        wordToReturn += splitString[i]
      }
    }
    return wordToReturn
  }
  
  // console.log(decoder('2bna0p1mp2osl0e'))
  // decoder('0h2xce5ngbrdy')
  // decoder('2bna0p1mp2osl0e')
  
  //max-diff
  //[15, 10, 20, 22, 1, 9]
  const best = (prices) => {
    let maxDiff = 0
    let lowSoFar
  
    for(let i = 0;i < prices.length;i++){
      if(lowSoFar === undefined || lowSoFar > prices[i]){
        lowSoFar = prices[i]
        console.log(lowSoFar)
      }
      let diff  = prices[i] - lowSoFar
    console.log(diff)
      if(diff > maxDiff){
        maxDiff = diff
        console.log('md','------',maxDiff)
      }
    }
    return maxDiff
  }
  
  console.log(best([15, 10, 20, 22, 1, 9]))