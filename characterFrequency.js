const readline = require("readline");

const str = "palMrinmoypalpal";
searchValue = "p"
function countOccurrences(str, searchValue) {
  splittedArray = str.split(searchValue);
  countOfChar = splittedArray.length -1;
  console.log(countOfChar);
  return countOfChar;
}

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter the string: ", (input1) => {
  rl.question("Enter the char: ", (input2) => {
    countOccurrences(input1, input2);
    rl.close();
  });
});