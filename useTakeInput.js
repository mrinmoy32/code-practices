const takeInput = require("./readline.js");

function printInput(input) {
  console.log("From useTakeInput file we can access: " , input);
}

takeInput(printInput);