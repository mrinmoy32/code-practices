const readline = require("readline");

const getGCD = (num1, num2) => {
  let small,
    i = 1;
  num1 < num2 ? (small = num1) : (small = num2);
  for (i; i <= small; i++) {
    if (num1 % i == 0 && num2 % i == 0) gcd = i;
  }
  return gcd;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the 1st number: ", (input1) => {
  // console.log(input1);
  rl.question("Enter the 2nd number: ", (input2) => {
    // console.log(input2);
    console.log(`GCD of ${input1} and ${input2} is: ${getGCD(input1, input2)}`);
    rl.close();
  });
});
