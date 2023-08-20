/**
 * Attaching listeners to prototyoe
 */
Array.prototype.listeners = {};
Array.prototype.addListener = function (eventName, callback) {
  if (!this.listeners[eventName]) {
    // Create a new array for new events
    // idea of an array is we can invoke all callbacks
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};
// New push Method
// Calls trigger event

Array.prototype.pushWithEvent = function () {
  const size = this.length; //0
  const argsList = Array.prototype.slice.call(arguments); //1, 2, 3, "a", "b"
  for (let index = 0; index < argsList.length; index++) {
    this[size + index] = argsList[index];
  }
  // trigger add event
  this.triggerEvent("add", argsList);
};
Array.prototype.popWithEvent = function () {
  // trigger add event
  this.pop();
  this.triggerEvent("pop", (argsList = []));
};
Array.prototype.triggerEvent = function (eventName, elements) {
  if (this.listeners[eventName] && this.listeners[eventName].length) {
    this.listeners[eventName].forEach((callback) =>
      callback(eventName, elements, this)
    );
  }
};
// example
const a = [];
const listenerInput = document.getElementById("listener_input");
const pushButton = document.getElementById("push_button");
let val;
listenerInput.addEventListener("keyup", (e) => {
  if (e.target.value) {
    val = e.target.value;
    pushButton.disabled = false;
  } else {
    pushButton.disabled = true;
  }
});
pushButton.addEventListener("click", () => {
  a.pushWithEvent(val);
  listenerInput.value = "";
});
a.addListener("add", (items, args) => {
  console.log("items were added", args);
});

a.addListener("pop", () => {
  console.log("popped out last element");
});

a.pushWithEvent(1, 2, 3, "a", "b");
a.pushWithEvent("hello");
a.pushWithEvent(55);
a.popWithEvent();

console.log(a);
