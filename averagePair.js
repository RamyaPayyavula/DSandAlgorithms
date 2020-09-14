/**Given a sorted array of Integers and a target average value,
 * If there is a pair of values in the array when the average of the pair is equal to the target
 * average value. there may be more than one pair that matches the average */
function averagePair(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  if (arr.length === 0) {
    return false;
  }
  while (i < j) {
    const avg = (arr[i] + arr[j]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([], 2.5));
