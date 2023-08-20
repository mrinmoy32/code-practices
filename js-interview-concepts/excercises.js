// Remove duplicate elements from Array

const arr = [1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7];

// Mutation
function deduplicate(givenArr) {
  for (let index = 0; index < givenArr.length; index++) {
    while (givenArr[index] === givenArr[index + 1]) {
      givenArr.splice(givenArr[index], 1);
    }
  }
}

deduplicate(arr);
// console.log(`By mutating:  ${arr}`);

// Without mutating
const arr2 = [1, 1, 1, 2, 3, 44, 44, 33, 21, 44, 21, 19];
const res = arr2.filter((ele, ind) => arr2.lastIndexOf(ele) === ind);
// console.log(`Pure result ${res}`);

// ---------------------------------------
// Ex : Add a div in the dom, on click on the div, it should be edittable, and the content written in the edittable field should be saved in localstorage when clicked outside the edittable div

// const body = document.querySelector("body");

// const theDiv = document.createElement("div");
// theDiv.setAttribute("id", "theDiv");
// let previousText = localStorage.getItem("details");
// theDiv.innerText =
//   previousText?.length > 0 ? previousText : "Click me to add text";
// body.appendChild(theDiv);
// const theElem = document.getElementById("theDiv");
// const makeDivEdittable = () => {
//   theElem.setAttribute("contenteditable", true);
//   theElem.addEventListener("blur", () => {
//     localStorage.setItem("details", `${theElem.innerText}`);
//   });
// };
// theElem.addEventListener("click", makeDivEdittable);

// -------------------------------------------------------------------------------------------------------

// -------------------------Shallow Copy Vs Deep Copy----------------------------------------------------
// let obj1 = {
//   person1: {
//     firstName: "Sharath",
//   },
//   a: 2,
// };

// let shallowCopy = JSON.parse(JSON.stringify(obj1));

// shallowCopy.a = 5;
// shallowCopy.person1.firstName = 8;

// console.log(obj1);
// console.log(shallowCopy);

// --------------------------------------------------------------------------------------------------------

const arr3 = [2, 3, 4, 5];

// o/p: [12,15,18,21]

// Array.prototype.sum = function (num) {
//   let arr = this;
//   return arr.map((each) => each + num);
// };

// Array.prototype.multiply = function (num) {
//   let arr = this;
//   return arr.map((each) => each * num);
// };

// console.log(arr3.sum(2).multiply(3));

// --------------------------------------------------------------------------------------------------------

// Count the numbers present inside this array till the very last nested array.
const nestedArray = [
  "a",
  1,
  function () {},
  [2, "b", function () {}, [4, function () {}, "sharath"]],
  3,
  "A",
];

// output : 4

// Function to flatten an array
const myFlat = (Array.prototype.myFlat = function (arr, ans = []) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (Array.isArray(element)) {
      myFlat(element, ans);
    } else {
      ans.push(element);
    }
  }
  return ans;
});

console.log();
const customFlattenedArray = nestedArray.myFlat(nestedArray);
const defaultFlatArray = nestedArray.flat(Infinity);

console.log(defaultFlatArray);
console.log(customFlattenedArray);

const totalNums1 = customFlattenedArray.filter((ele) => !isNaN(ele)).length;
const totalNums2 = customFlattenedArray.filter((ele) => !isNaN(ele)).length;

console.log(totalNums1);
console.log(totalNums2);

// ----------------------------------------------------------------------------------------------------

/* - Input : a21b23c45a34d56
- Output : a55b23c34d56
- Explanation : Each 3 characters are key : value pairs of letter and its value, so in the input , ‘a’ is encountered twice its corresponding value is added and given out in the result
*/

const testStr = "a21b23c45a34d56";

const reverseNum = (num = "") => {
  if (num === "") return "";
  return [...num].reverse().join("");
};

const convertFromMaptoString = (map) => {
  let res = "";
  for (let [key, value] of Object.entries(map)) {
    res += `${key}${value}`;
  }

  return res;
};

const test = (str = "") => {
  if (str === "") return 0;
  const map = {};
  let num = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "a" && str[i] <= "z") {
      let revNum = reverseNum(num);
      num = "";
      if (map[str[i]]) {
        map[str[i]] = map[str[i]] + Number(revNum);
      } else {
        map[str[i]] = Number(revNum);
      }
    } else {
      num += str[i];
    }
  }
  return convertFromMaptoString(map);
};

console.log(test(testStr));

// ----------------------------------------------------------------------------------------------------

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const c1 = new Person("Sharath", 23);
const c2 = Person("Sharath Nair", 23);

// console.log(c1);
// console.log(c2);

// -------------------------------------------------------------------------------------------------------

// Return the elements that are not repeated from the array

const sample = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6];
function lonelyinteger(arr) {
  // Write your code here
  return arr.filter((ele, ind) => arr.indexOf(ele) === arr.lastIndexOf(ele));
}

console.log(lonelyinteger(sample));

// ------------------------------------------------------------------------------------------------

/*
  Given input arr = 3,1,5,4 , y = 2
  make any number of operations by adding a number x to all elements in array so that we can get max number of y's in it
*/

const maxfreqArr = [1, 1];
const y = -10;

function solve(arr) {
  const map1 = new Map();
  for (const element of arr) {
    if (map1.has(element)) {
      map1.set(element, map1.get(element) + 1);
    } else {
      map1.set(element, 1);
    }
  }
  let max = 0;
  for (const [key, value] of map1) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

console.log(solve(maxfreqArr, y));

// ------------------------------------------------------------------------------------------------
function flippingMatrix(matrix) {
  // Write your code here
  let sum = 0;
  let len = matrix.length / 2;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      sum =
        sum +
        Math.max(
          Math.max(matrix[i][j], matrix[i][2 * len - j - 1]),
          Math.max(
            matrix[2 * len - i - 1][j],
            matrix[2 * len - i - 1][2 * len - j - 1]
          )
        );
    }
  }
  return sum;
}

console.log(
  flippingMatrix([
    [1, 2],
    [3, 4],
  ])
);
// ------------------------------------------------------------------------------------------------
function plusMinus(arr) {
  // Write your code here
  const ratiosArray = new Array(3).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
      ratiosArray[0]++;
    } else if (element < 0) {
      ratiosArray[1]++;
    } else {
      ratiosArray[2]++;
    }
  }
  ratiosArray.map((value) => console.log((value / arr.length).toFixed(6)));
}

plusMinus([1, 1, 0, -1, -1]);

// ------------------------------------------------------------------------------------------------

// Compose function

const compose = (first, second) => (x) => second(first(x));

const obj = {
  name: "sharath",
};

const getUserName = (obj) => obj.name;

const capitalize = (name) => name[0].toUpperCase() + name.slice(1);

const getCapitalizedUsername = compose(getUserName, capitalize);

console.log(getCapitalizedUsername(obj));

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

const ans = add(1)(2)(3)();

console.log(ans);

// =========================================================================================

const obj1 = {
  firstname: "John",
  lastname: "Doe",
  age: 24,
  isMarried: false,
  address: {
    city: "SFO",
    state: "CA",
    zip: 111111,
    details: {
      block: "23rd Lexington Avenue",
      street: "El Camino Street",
    },
  },
};

const getValue = (obj, path) => {
  const pathKeys = path.split(".");
  let val = null;
  if (Object.keys(obj) && Object.keys(obj).includes(pathKeys[0])) {
    if (pathKeys.length > 0) {
      return true;
    } else {
      val = obj[pathKeys[0]];
      let nextPath = pathKeys.slice(1).join(".");
      return getValue(val, nextPath);
    }
  } else {
    return false;
  }
};

/**
 * Base Case : "address.details" is not a valid path in the object // return false
 * Success case : "address.details.block" is the last element and reachable of the object and has a valid value //return true
 * else return next recursive solution
 *
 */

console.log(getValue(obj1, "address.city"));
console.log(getValue(obj1, "address.details.sharath"));
