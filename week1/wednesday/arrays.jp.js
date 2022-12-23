//In this file, we'll be continuing our story
  //  with Jon being allowed to flee his fight with Jamie.
//*/



let guessMe = 54;

while (guessMe < 100) {
    // console.log('----------');
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        // console.log('guessMe is divisible by 4 or 5.  Added 25.');
        guessMe += 25;
    } else if (guessMe % 3 == 0) {
        // console.log('guessMe is divisible by 3.  Subtracted 27.');
        guessMe -= 27;
    } else {
        // console.log('Added 3.');
        guessMe += 3;
    }
    guessMe += 22;
    // console.log(`guessMe is now ${guessMe}.`);
}
console.log(guessMe)
    