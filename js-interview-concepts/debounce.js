const inputField = document.getElementById("input_text");
const normalText = document.getElementById("normal_text");
const debounceText = document.getElementById("debounce_text");
const throttleText = document.getElementById("throttle_text");

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const throttle = (cb, delay) => {
  let shouldWait = false;
  let remainingArgs;
  const timeFunc = () => {
    if (remainingArgs === null) {
      shouldWait = false;
    } else {
      cb(...remainingArgs);
      remainingArgs = null;
      setTimeout(timeFunc, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      remainingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeFunc, delay);
  };
};

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
}, 1000);

const updateNormalText = (text) => {
  normalText.textContent = text;
};

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
}, 1000);

inputField.addEventListener("keyup", (e) => {
  updateNormalText(e.target.value);
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});
