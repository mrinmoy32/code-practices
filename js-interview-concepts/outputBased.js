// --------------------------------------------------------------------------------------------------------
// Guess the output
// function counter() {
//   let counter = 0;
//   return () => {
//     return ++counter;
//   };
// }
// const ct1 = counter();
// const ct2 = counter();
// console.log(ct1());
// console.log(ct2());
// console.log(ct1());
// console.log(ct2());

// --------------------------------------------------------------------------------------------------------

const obj10 = {
  total: 0,
  mutliply(num) {
    this.total *= num;
    return this;
  },
  add(num) {
    this.total += num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
};

const { total } = obj10.mutliply(10).subtract(5).add(6).mutliply(3);

console.log(total);

// -----------------------------------------------------------------------
function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password === "Sharath Codes") ok();
  else fail();
}

let user = {
  name: "Sharath Nair",
  login: function (result) {
    console.log(this.name + (result ? " Login Successful" : " Login Failed"));
  },
};

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

// -----------------------------------------------------------------------

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this}.myCall is not a function`);
  }
  context.fnRef = this;
  context.fnRef(...args);
};
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this}.myCall is not a function`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError(`${args} is not an iterable`);
  }
  context.fnRef = this;
  context.fnRef(...args);
};
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this}.myCall is not a function`);
  }

  context.fnRef = this;
  return function (...newArgs) {
    return context.fnRef(...newArgs, ...args);
  };
};

let obj2 = {
  name: "Sharath",
  getName: function (age) {
    return `${this.name} ${age}`;
  },
};

let obj3 = {
  name: "Sharath Nair",
};

console.log(obj2.getName.call(obj3, 23));
console.log(obj2.getName.myCall(obj3, 23));
obj2.getName.myApply(obj3, [23]);
console.log(obj2.getName.myBind(obj3)(23));
console.log(obj2.getName.bind(obj3)(23));
