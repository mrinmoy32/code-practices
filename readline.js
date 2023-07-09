const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const takeInput =  (callback) => {
   rl.question("give your input: ", (input) => {
    console.log(`You've entered, ${input}`);
    callback(input);
    rl.close();
    return input;
  });
};

module.exports = takeInput;
