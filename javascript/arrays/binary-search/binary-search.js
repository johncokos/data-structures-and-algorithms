let binarySearch = (arr, value) => {

  let start = 0;
  let end = arr.length - 1;
  let middle = 0;

  while( start <= end ) {

    middle = Math.floor( (start+end) / 2);

    if ( value === arr[middle] ) {
      return middle;
    }

    else if ( value > arr[middle] ) {
      start = middle + 1;
    }

    else {
      end = middle - 1;
    }

  }

  // return [false,iterations];
  return -1;
};

let array1 = [4,8,15,16,23,42];

console.log(binarySearch(array1, 15));
console.log(binarySearch(array1, 90));

