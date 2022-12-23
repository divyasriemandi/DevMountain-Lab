

//let x = 1
//let y = 2

//if (x > y){
  //  console.log(x)}
    //else {

    
    //console.log(y)
//}

//if ( x===y){
  //  console.log('the values are identical')
//}
//else if 
  //  (x > y){
    //    console.log(x)}
      //  else {
    
        
        //console.log(y)
    //}

    // [1, 4, 11, 2, 37, -4]

//let ourNumbers = (1, 4, 11, 2, 37, -4)
//let smallestNumber = -4
//let largestNumber = 37
//console.log(ourNumbers[0])

f//or (let i = 0; i < ourNumbers.length; i++) {
  //console.log(i)


//    for (let i = 0; i < ourNumbers.length; i++) {
  //      if (i < 0) {
    //      console.log("smallestNumber:", ourNumbers[i])
      //  } else {
        //  console.log("largestNumber:", ourNumbers[i])
        
      





        let smallest = array[0]
        let biggest = array[0]
        
        for(let i = 0; i < 6; i++){
          if(smallest > array[i]){
            smallest = array[i]
          } else if (biggest < array[i]){
            biggest = array[i]
          }
        }
        
        console.log(smallest, biggest)