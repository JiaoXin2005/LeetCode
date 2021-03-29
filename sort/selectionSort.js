const array = require("./array");

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    i !== minIndex && ([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]);
  }
};

selectionSort(array);
console.log(array);
