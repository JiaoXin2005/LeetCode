const array = require("./array");

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i;
    while (j > 0) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    arr[j] = temp;
  }
};

insertionSort(array);
console.log(array);
