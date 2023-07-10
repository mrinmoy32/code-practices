const takeInput = require("./readline.js");

function countChar(input) {
  console.log("From useTakeInput file we can access: " , input);
}

takeInput(countChar);