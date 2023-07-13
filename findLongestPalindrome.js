const checkPalindrome = require("./Palindrome");
const takeInput = require("./readline");

function sortedByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

const find_longest_palindrome = (array) => {
  array.forEach((item, index) => {
    if (!checkPalindrome(item)) {
      array.splice(index, 1);
    }
  });

  let sortedPalindromes = sortedByLength(array);

  let lastItem = sortedPalindromes[sortedPalindromes.length - 1];

  console.log(`Largest Palindrome: ${lastItem}`);
  return lastItem;
};

const handle_user_input = (inputStr) => {
  inputArray = inputStr.split(" ");
  find_longest_palindrome(inputArray);
};

takeInput(handle_user_input);
