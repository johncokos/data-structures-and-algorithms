'use strict';

let arr = [1,4,5,2,6,7,8,3,9];

console.log(quickSort(arr,0,arr.length-1));

function quickSort(arr, left, right){

  if(left < right){
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, pivot, left, right){

  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
