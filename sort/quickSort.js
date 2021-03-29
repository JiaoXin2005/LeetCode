const array = require("./array");

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = arr[0];
  let left = [];
  let right = [];
  arr.forEach((item, index) => {
    // 从第二个元素开始遍历
    if (index > 0) {
      item > mid ? right.push(item) : left.push(item);
    }
  });

  return [...quickSort(left), mid, ...quickSort(right)];
};

quickSort(array);
