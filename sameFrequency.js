/**Given two positive integers find out if the two numbers have the same freuqnecy of digits. your solution must have the following complexities*/
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  var str1 = {};
  if (num1.length !== num2.length) {
    return false;
  } else {
    for (var i in num1) {
      const num = num1[i];
      str1[num] = (str1[num] || 0) + 1;
    }
    for (var i in num2) {
      const num = num2[i];
      if (!str1[num]) {
        return false;
      } else {
        str1[num] = str1[num] - 1;
      }
    }
    return true;
  }
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
