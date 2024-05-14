(function () {
  function generateList(arr) {
    const ulElem = document.createElement("ul");

    for (const element of arr) {
      const liElem = document.createElement("li");
      if (Array.isArray(element)) {
        liElem.append(generateList(element));
      } else {
        liElem.textContent = element;
      }
      ulElem.append(liElem);
    }
    return ulElem;
  }

  const list = generateList([1, 2, [2.1, 2.2], 3, [3.1, 3.2], 4]);
  document.body.append(list);
})();
