function countUniqueValues(arr) {
  var i = 0;
  var j = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      arr[i + 1] = arr[j];
      i++;
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 2, 2, 2, 2, 4, 5, 6, 6, 6, 7]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -2, -1, -1, 0]));
