'use strict';

let shiftNew = (arr, val) => {
  let newArray = [];
  let middle = Math.floor(arr.length / 2);
  for (let i = 0; i < middle; i++) {
    newArray.push(arr[i]);
  }
  newArray.push(val);
  for (let i = middle; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

let shiftInPlace = (list, val) => {
  let middle = Math.floor(list.length / 2);
  for (let i = list.length; i > middle; i--) {
    list[i] = list[i - 1];

  }
  list[middle] = val;
};


module.exports = { shiftNew, shiftInPlace };
