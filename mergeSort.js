// Merge sort is a popular sorting algorithm that follows the divide-and-conquer approach. It works by dividing the input array into smaller halves, sorting them recursively, and then merging the sorted halves to produce a sorted output array.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from either leftArr or rightArr
  result = result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));

  return result;
}

// Example usage:
const arr = [7, 2, 6, 4, 9, 1, 5, 8, 3];
const sortedArray = mergeSort(arr);
console.log(sortedArray);
