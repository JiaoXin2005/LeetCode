const array = require("./array");

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
};

bubbleSort(array);
console.log(array);
