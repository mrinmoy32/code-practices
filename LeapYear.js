const takeInput = require('./readline');
const checkLeapYear = yearStr => {
    year = parseInt(yearStr, 10); //converting the cmd line input from str to number
    year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)
    ? console.log("Leap Year")
    : console.log("Not a Leap Year")
}
console.log("Testing Leap year");
takeInput(checkLeapYear);