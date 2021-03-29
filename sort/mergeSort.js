const array = require("./array");

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = ~~(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  let orderLeft = mergeSort(left); //
  let orderRight = mergeSort(right); // 将已经排序好的数组进行合并
  let res = [];
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      orderLeft[0] > orderRight[0]
        ? res.push(orderRight.shift())
        : res.push(orderLeft.shift());
    } else if (orderLeft.length) {
      res.push(orderLeft.shift());
    } else {
      res.push(orderRight.shift());
    }
  }
  return res;
};

console.log(mergeSort(array));
