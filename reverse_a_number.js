//1. Using available JS functions and reversing a string ----->

// const reverse_a_number = (num) => {
//     const str = num.toString();
//     const splitStrArray = str.split("")
//     reverseStrArray = splitStrArray.reverse();
//     joinStrArray = reverseStrArray.join("");
//     reverseNum = parseInt(joinStrArray);
//     return reverseNum;
// }


//2. Using simple math
const reverse_a_number = (num) => {
 let reverse = 0;
  while (num > 0) {
    remainder = num % 10; //modulo operator returns the remainder
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10); // JavaScript performs floating-point division. 
    //As a result, the value of num keeps decreasing but never reaches zero, causing an infinite loop.
    //To fix this issue, you can use the Math.floor() function 
    //to ensure that num is rounded down to the nearest integer
  }
  return reverse;
};
console.log(reverse_a_number(23));