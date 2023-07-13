const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

const commandLineStringToArray = (string) => string.split(" ");

const bubbleSort = (Str) => {
    arrayStr = commandLineStringToArray(Str);
    array = arrayStr.map(item => parseInt(item));
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-i-1; j++){
           if (array[j]>array[j+1]) swap(array, j, j+1);
        }
    }
    console.log(array);
    return array;
}

// const list = [100, 5, 3, 1, 2, 0]; //sample array
// console.log(bubbleSort(list)); //calling bubbleSort to sort sample array

console.log("please enter the data to sort with single space") //To take input as e.g. 12 1 0 11 11 100 5
const takeInput = require('./readline');
takeInput(bubbleSort);