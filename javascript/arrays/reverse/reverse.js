'use strict';

let reverse = (list) => {
  let start = 0;
  let end = list.length-1;
  while( start <= end ) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
};

let arr = [2,4,6,8,10,12];
reverse(arr);
console.log(arr);
