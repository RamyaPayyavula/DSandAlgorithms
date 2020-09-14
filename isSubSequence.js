/**takes in two strings and checks whether the characters in the first string from a subsequence of
 * the characters in the second strings. function should check the characters in the first string appear
 * somewhere in the second string, without their order changing
 */
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) {
    return false;
  }
  if (str2.includes(str1)) {
    return true;
  }
  while (j < str2.length) {
    if (i >= str1.length) {
      return true;
    } else {
      const p = str2.indexOf(str1[i]);
      if (j > p || p === -1) {
        return false;
      } else {
        j = p;
        i++;
      }
    }
  }
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("abcd", "abjahshdgdc"));
