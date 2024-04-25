(() => {
  const newSum = function () {
    let sum = 0;

    return function (number) {
      sum += number;
      return sum;
    };
  };

  const sumi = newSum();

  console.log(sumi(3));
  console.log(sumi(5));
  console.log(sumi(20));
})();
