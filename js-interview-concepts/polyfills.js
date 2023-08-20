// polyfill for Array map method
const myMap = (Array.prototype.myMap = function (cb) {
  const myArr = this;
  const res = [];
  for (let index = 0; index < myArr.length; index++) {
    const eachRes = cb(myArr[index], index, myArr);
    res.push(eachRes);
  }
  return res;
});

// Polyfill for filter method
const myFilter = (Array.prototype.myFilter = function (cb) {
  const myArr = this;
  const res = [];
  for (let index = 0; index < myArr.length; index++) {
    if (cb(myArr[index], index, myArr)) {
      res.push(myArr[index]);
    }
  }
  return res;
});

// Polyfill for forEach
const myforEach = (Array.prototype.myforEach = function (cb) {
  const myArr = this;
  for (let index = 0; index < myArr.length; index++) {
    cb(myArr[index], index, myArr);
  }
});

// Polyfill for asynchronous forEach
const myAsyncforEach = (Array.prototype.myAsyncforEach = async function (cb) {
  const myArr = this;
  for (let index = 0; index < myArr.length; index++) {
    await cb(myArr[index], index, myArr);
  }
});

// Polyfill for reduce
const myReduce = (Array.prototype.myReduce = function (cb, initialData) {
  const myArr = this;
  let accumulator = initialData ?? myArr[0];
  for (let i = 0; i < myArr.length; i++) {
    accumulator = cb(accumulator, myArr[i], i, myArr);
  }
  return accumulator;
});

// Polyfill for call in javascript

const myCall = (Function.prototype.myCall = function (obj, ...args) {
  obj.fnRef = this;
  return obj.fnRef(...args);
});

const myApply = (Function.prototype.myApply = function (obj, args) {
  obj.fnRef = this;
  return obj.fnRef(...args);
});

const myBind = (Function.prototype.myBind = function (obj, ...args) {
  obj.fnRef = this;
  return function () {
    return obj.fnRef(...args);
  };
});

export {
  myMap,
  myforEach,
  myAsyncforEach,
  myFilter,
  myReduce,
  myCall,
  myApply,
  myBind,
};
