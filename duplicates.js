/**accepts a variable number of arguments, and checks whethere there are any duplicates among the arguments passed in */
function areThereDuplicates() {
  var args = {};
  if (args.length === 0) {
    return true;
  }
  for (let arg in arguments) {
    const val = arguments[arg];
    if (!args[val]) {
      args[val] = 1;
    } else {
      return true;
    }
  }
  return false;
}
function areThereDuplicates2() {
  //new Set(arguments) returns unique elements in a sring or an array or a set

  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
