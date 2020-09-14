/**finds the maximum sum of a subarray with the length of the number passed to the function */
function maxSubarraySum(arr, limit) {
  let tempSum = 0;
  let maxSum;
  if (arr.length === 0 || arr.length < limit) {
    return null;
  }
  for (let i = 0; i < limit; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let j = limit; j < arr.length; j++) {
    tempSum = tempSum - arr[j - limit] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
