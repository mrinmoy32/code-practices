//A plaindrome is a word that is spelt the same forward and backward.

//E.g. "BOB", "racecar", "121"

//********Check Palindrome********

// let givenWord = "racecar";
// let ourStack = [];  // We are using this empty Array as a stack to push the letters
// let reverseWord = "";

// for(i=0; i<givenWord.length; i++){
//     ourStack.push(givenWord[i]);
// }
// console.log(ourStack);

// for(i=0; i<givenWord.length; i++) {
//     reverseWord += ourStack.pop();
// }
// console.log("reverseWord =" , reverseWord);

// if(givenWord === reverseWord) console.log(givenWord , "is a Plaindrome");
// else console.log(givenWord , "is not a Plaindrome");

//Simpler way in js =================================>>>>>>>>>>>>>>>>>>>>>>>>>>>

const readline = require("readline");

const reverseString = string => string.split("").reverse().join("");

const checkPalindrome = string =>
  reverseString(string) === string
    ? console.log(string, "is a palindrome")
    : console.log(string, "is not a palindrome");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (input) => {
  checkPalindrome(input);
  rl.close();
});
