const readline = require("readline");

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
    const count = countOccurrences(input1, input2);
    if(count == 0) console.log("The char is not present in entered string");
    else count == 1
  ? console.log("You've entered a non repeating char")
  : console.log("You've entered a repeating char");
    rl.close();
  });
});


