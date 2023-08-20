// const add = (num) => num + 1000;

const memoedData = (fn) => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log("in cache");
      return cache[n];
    } else {
      console.log("not in cache");
      let res = fn(n);
      cache[n] = res;
      return res;
    }
  };
};

const userFound = (user) => {
  const userList = ["sharath", "rohit"];
  for (let i = 0; i < 100000000; i++) {}
  return userList.some((u) => u === user);
};

const memoedSearch = memoedData(userFound);

console.time("Searching");
console.log(memoedSearch("sharath"));
console.timeEnd("Searching");
console.time("Searching");
console.log(memoedSearch("sharath"));
console.timeEnd("Searching");

const memoedSum = memoedData(add);

console.log(memoedSum(5));
console.log(memoedSum(10));
console.log(memoedSum(10));
