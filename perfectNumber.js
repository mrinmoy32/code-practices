//In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. For instance, 6 has divisors 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect number.

const readline = require("readline");

const perfectNumber = (num) => {
  let sum = 0, i = 1;
  for (i; i<num; i++) {
    num % i == 0 ? (sum += i) : (sum += 0);
  }
  num == sum
    ? console.log("The number is a Perfect number")
    : console.log("The number is not a Perfect number");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to check? ", (inputNumber) => {
  console.log(`You have entered, ${inputNumber}!`);
  perfectNumber(inputNumber);
  rl.close();
});
