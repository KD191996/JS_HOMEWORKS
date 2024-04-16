const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const flat = function (arr) {
  if (arguments.length !== 1) {
    console.error(
      "Function accepts only 1 argument, too much arguments provided",
    );
  }
  const result = [];

  const flatten = (array) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        result.push(array[i]);
      } else {
        flatten(array[i]);
      }
    }
  };
  flatten(arr);
  return result;
};

console.log(flat(complexArray));
