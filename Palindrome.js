//A plaindrome is a word that is spelt the same forward and backward.

//E.g. "BOB", "racecar", "121"

//********Check Palindrome********

let givenWord = "racecar";
let ourStack = [];  // We are using this empty Array as a stack to push the letters
let reverseWord = "";

for(i=0; i<givenWord.length; i++){
    ourStack.push(givenWord[i]);
}
console.log(ourStack);

for(i=0; i<givenWord.length; i++) {
    reverseWord += ourStack.pop();
}
console.log("reverseWord =" , reverseWord);

if(givenWord === reverseWord) console.log(givenWord , "is a Plaindrome");
else console.log(givenWord , "is not a Plaindrome");