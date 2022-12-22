//Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

//If the phrase is over half vowels, it should return true:

//hasMoreVowels('moose')
// true
//If it’s half vowels (or less), it’s false:

//hasMoreVowels('mice')
// false

//hasMoreVowels('graph')
// false
//Don’t consider “y” as a vowel:

//hasMoreVowels('yay')
// false
//Uppercase vowels are still vowels:

//hasMoreVowels('Aal')def isVowel(char):

// function hasMoreVowels(word) {
// let vowels = ['a', 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U']
// let nonVowels = []
// for(i = 0; i < vowels.length; i++)
// {
// if (vowels === nonVowels){
// return true}
// else
// {
// return false; 
// }
// }   
// }




function hasMoreVowles(word){
    let vowles = ["a", "e", "i", "o", "u"];
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
      for(let i = 0; i < vowles.length; i++){
        for(let j = 0; j < consonants.length; j++){
            if(vowles > consonants){
          return true;
        }else if(vowles < consonants){
          return false;
        }
        }
      }
      }
    
    console.log(hasMoreVowles("hello"))