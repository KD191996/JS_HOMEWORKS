// Task #1

function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

console.log(getFactorial(5));

// Task #2
function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}

console.log(pow(3, 4));

// Task #3
function recursiveSum(a, b) {
  if (b === 0) {
    return a;
  }
  return recursiveSum(a + 1, b - 1);
}

console.log(recursiveSum(4, 5));
