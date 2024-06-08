(function () {
  const arr = [1, 2, 3, 4, 5];

  const iterator = (data) => {
    const myArr = Array.from(data);
    let index = 0;

    return {
      next() {
        let done = myArr.length <= index ? true : false;
        const value = !done ? myArr[index] : undefined;

        const result = {
          value,
          done,
        };

        index += 1;

        return result;
      },
    };
  };

  const myIterator = iterator(arr);

  console.log(myIterator.next());
  console.log(myIterator.next());
  console.log(myIterator.next());
  console.log(myIterator.next());
  console.log(myIterator.next());
  console.log(myIterator.next());
})();
