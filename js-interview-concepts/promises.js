const divisbleBy2Promise = (num) =>
  new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      setTimeout(() => {
        resolve("Number divisible by 2");
      }, 2000);
    } else {
      reject(new Error("That is not divisible by 2"));
    }
  });
const primePromise = (num) =>
  new Promise((resolve, reject) => {
    let bool = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        bool = false;
        break;
      }
    }
    if (bool) {
      setTimeout(() => {
        resolve("Number is Prime");
      }, 1000);
    } else {
      reject(new Error("Not a prime"));
    }
  });

Promise.race([divisbleBy2Promise(2), primePromise(5)]).then((values) =>
  console.log(values)
);

Promise.all([divisbleBy2Promise(2), primePromise(5)]).then((res) =>
  console.log(res)
);

const prom1 = new Promise((res) => {
  setTimeout(() => {
    res("I resolved");
  }, 1000);
});
const prom2 = new Promise((res) => {
  setTimeout(() => {
    res("I resolved 2");
  }, 1500);
});

Promise.all([prom1, prom2]).then((eachProm) => console.log(eachProm));

Promise.prototype.myAll = async function (promises) {
  let allPromises = [...promises];
  let res = [];
  for await (const promise of allPromises) {
    promise.then((r) => res.push(r));
  }
  return Promise.resolve(res);
};

Promise.myAll([prom1, prom2]).then((eachProm) => console.log(eachProm));

//---------------------
