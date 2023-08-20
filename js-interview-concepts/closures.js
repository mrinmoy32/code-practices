// closure example

let name = "Sharath";
function bahar() {
  function andhar(lName) {
    console.log(`My Full Name : ${name} ${lName}`);
  }
  return andhar;
}

bahar()("Nair");

// closure not so optimal

function findNormal(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.time("6");
findNormal(6);
console.timeEnd("6");
console.time("20");
findNormal(20);
console.timeEnd("20");

// optimal closure

function findIndex() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const find = findIndex();

console.time("6");
find(6);
console.timeEnd("6");
console.time("20");
find(20);
console.timeEnd("20");
