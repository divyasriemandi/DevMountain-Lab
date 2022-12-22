//Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

//For example:

//isPalindrom("a")
// returns true

//isPalindrom("noon")
// returns true

//isPalindrom("hello")
// returns false
//Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

//isPalindrom("Racecar")
// returns false

//isPalindrom("racecar")
// returns true

function palindrome(word){
let reversed = word.split("").reverse().join("")
return word === reversed
}
let word = 'noon'
console.log(palindrome(word));

let word = 'noon'
console.log(palindrome(word));