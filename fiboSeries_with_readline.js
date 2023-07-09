//In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

const readline = require("readline");

const fibo_series = (num) => {
  series = [0, 1];
  num1 = 0;
  num2 = 1;
  for (let i = 2; i < num; i++) {
    const next_term = num1 + num2;
    series.push(next_term);
    num1 = num2;
    num2 = next_term;
  }
  console.log(series);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of terms? ", (inputNumber) => {
  userInput = inputNumber;
  console.log(`You have entered, ${inputNumber}!`);
  fibo_series(userInput);
  rl.close();
});


