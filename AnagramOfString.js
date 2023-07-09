// An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other. Examples: Input: str1 = “listen” str2 = “silent”

const readline = require("readline");

const sortString = (string) => {
  return string.split("").sort().join("");
};

const checkAnagram = (string1, string2) => {
  string1.length !== string2.length
    ? console.log("Given strings are not anagram")
    : sortString(string1) == sortString(string2)
    ? console.log("Given strings are anagram")
    : console.log("Given strings are not anagram");
};

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st string: ", (input1) => {
  rl.question("Enter 2nd string: ", (input2) => {
    checkAnagram(input1, input2);
    rl.close();
  });
});