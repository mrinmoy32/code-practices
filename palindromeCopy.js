const readline = require("readline");

const reverseString = string => string.split("").reverse().join("");

const checkPalindrome = string =>
  reverseString(string) === string
    ? console.log(string, "is a palindrome")
    : console.log(string, "is not a palindrome");

const checkPalindromeWithInput = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a string: ", (input) => {
    checkPalindrome(input);
    rl.close();
  });
};

module.exports = checkPalindrome;
